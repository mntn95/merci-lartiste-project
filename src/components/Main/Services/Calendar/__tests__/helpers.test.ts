import {
  generateFutureDates,
  formatDate,
  formatTime,
  groupTimesByDate,
  fetchAvailableTimesLogic,
  isValidPreviousWeekOffset,
  getNextWeekOffset,
  getPreviousWeekOffset,
} from "../helpers";
import {
  CalendlyAvailableTime,
  calendlyApi,
} from "../../../../../services/calendly-api";

// Mock calendlyApi
jest.mock("../../../../../services/calendly-api", () => ({
  calendlyApi: {
    getAvailableTimes: jest.fn(),
  },
}));

describe("Calendar helpers", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("generateFutureDates", () => {
    it("should generate dates with correct structure", () => {
      const result = generateFutureDates(0);

      expect(result.startTime).toBeDefined();
      expect(result.endTime).toBeDefined();
      expect(typeof result.startTime).toBe("string");
      expect(typeof result.endTime).toBe("string");

      const startDate = new Date(result.startTime);
      const endDate = new Date(result.endTime);

      expect(startDate).toBeInstanceOf(Date);
      expect(endDate).toBeInstanceOf(Date);
      expect(startDate.getTime()).toBeGreaterThan(0);
      expect(endDate.getTime()).toBeGreaterThan(0);
    });

    it("should handle different week offsets", () => {
      const result1 = generateFutureDates(1);
      const result2 = generateFutureDates(2);

      expect(result1.startTime).not.toBe(result2.startTime);
      expect(result1.endTime).not.toBe(result2.endTime);
    });

    it("should handle negative offsets", () => {
      const result = generateFutureDates(-2);
      expect(result.startTime).toBeDefined();
      expect(result.endTime).toBeDefined();
    });
  });

  describe("formatDate", () => {
    it("should format date in French locale", () => {
      const dateString = "2024-01-15T10:00:00Z";
      const result = formatDate(dateString);

      // Should contain French month and day names
      expect(result).toMatch(
        /janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre/
      );
      expect(result).toMatch(
        /lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche/
      );
    });
  });

  describe("formatTime", () => {
    it("should format time in French locale", () => {
      const dateString = "2024-01-15T14:30:00Z";
      const result = formatTime(dateString);

      // Should be in HH:MM format
      expect(result).toMatch(/^\d{1,2}:\d{2}$/);
    });
  });

  describe("groupTimesByDate", () => {
    it("should group times by date", () => {
      const mockTimes: CalendlyAvailableTime[] = [
        {
          status: "available",
          invitees_remaining: 1,
          start_time: "2024-01-15T10:00:00Z",
          scheduling_url: "https://calendly.com/event1",
        },
        {
          status: "available",
          invitees_remaining: 1,
          start_time: "2024-01-15T14:00:00Z",
          scheduling_url: "https://calendly.com/event2",
        },
        {
          status: "available",
          invitees_remaining: 1,
          start_time: "2024-01-16T10:00:00Z",
          scheduling_url: "https://calendly.com/event3",
        },
      ];

      const result = groupTimesByDate(mockTimes);

      expect(Object.keys(result)).toHaveLength(2);
      expect(result["Mon Jan 15 2024"]).toHaveLength(2);
      expect(result["Tue Jan 16 2024"]).toHaveLength(1);
    });
  });

  describe("fetchAvailableTimesLogic", () => {
    it("should return available times when found", async () => {
      const mockResponse = {
        collection: [
          {
            status: "available",
            invitees_remaining: 1,
            start_time: "2024-01-15T10:00:00Z",
            scheduling_url: "https://calendly.com/event1",
          },
        ],
      };

      (calendlyApi.getAvailableTimes as jest.Mock).mockResolvedValue(
        mockResponse
      );

      const result = await fetchAvailableTimesLogic("test-uri", 0, "forward");

      expect(result.success).toBe(true);
      expect(result.availableTimes).toHaveLength(1);
      expect(result.weekOffset).toBe(0);
      expect(calendlyApi.getAvailableTimes).toHaveBeenCalledTimes(1);
    });

    it("should search forward when no results found initially", async () => {
      const emptyResponse = { collection: [] };
      const mockResponse = {
        collection: [
          {
            status: "available",
            invitees_remaining: 1,
            start_time: "2024-01-15T10:00:00Z",
            scheduling_url: "https://calendly.com/event1",
          },
        ],
      };

      (calendlyApi.getAvailableTimes as jest.Mock)
        .mockResolvedValueOnce(emptyResponse)
        .mockResolvedValueOnce(mockResponse);

      const result = await fetchAvailableTimesLogic("test-uri", 0, "forward");

      expect(result.success).toBe(true);
      expect(result.weekOffset).toBe(1);
      expect(calendlyApi.getAvailableTimes).toHaveBeenCalledTimes(2);
    });

    it("should search backward when specified", async () => {
      const emptyResponse = { collection: [] };
      const mockResponse = {
        collection: [
          {
            status: "available",
            invitees_remaining: 1,
            start_time: "2024-01-15T10:00:00Z",
            scheduling_url: "https://calendly.com/event1",
          },
        ],
      };

      (calendlyApi.getAvailableTimes as jest.Mock)
        .mockResolvedValueOnce(emptyResponse)
        .mockResolvedValueOnce(mockResponse);

      const result = await fetchAvailableTimesLogic("test-uri", 2, "backward");

      expect(result.success).toBe(true);
      expect(result.weekOffset).toBe(1);
    });

    it("should return failure when no results found after max attempts", async () => {
      const emptyResponse = { collection: [] };
      (calendlyApi.getAvailableTimes as jest.Mock).mockResolvedValue(
        emptyResponse
      );

      const result = await fetchAvailableTimesLogic(
        "test-uri",
        0,
        "forward",
        3
      );

      expect(result.success).toBe(false);
      expect(result.availableTimes).toHaveLength(0);
      expect(result.attempts).toBe(3);
      expect(calendlyApi.getAvailableTimes).toHaveBeenCalledTimes(3);
    });

    it("should handle negative offsets by setting to 0", async () => {
      const mockResponse = {
        collection: [
          {
            status: "available",
            invitees_remaining: 1,
            start_time: "2024-01-15T10:00:00Z",
            scheduling_url: "https://calendly.com/event1",
          },
        ],
      };

      (calendlyApi.getAvailableTimes as jest.Mock).mockResolvedValue(
        mockResponse
      );

      const result = await fetchAvailableTimesLogic("test-uri", -2, "forward");

      expect(result.success).toBe(true);
      expect(result.weekOffset).toBe(0);
    });
  });

  describe("Navigation helpers", () => {
    describe("isValidPreviousWeekOffset", () => {
      it("should return true when current offset is greater than first available week", () => {
        expect(isValidPreviousWeekOffset(3, 1)).toBe(true);
        expect(isValidPreviousWeekOffset(2, 0)).toBe(true);
      });

      it("should return false when current offset equals first available week", () => {
        expect(isValidPreviousWeekOffset(1, 1)).toBe(false);
        expect(isValidPreviousWeekOffset(0, 0)).toBe(false);
      });

      it("should handle null firstAvailableWeek by treating it as 0", () => {
        expect(isValidPreviousWeekOffset(1, null)).toBe(true); // 1 > (null ?? 0) = 1 > 0 = true
        expect(isValidPreviousWeekOffset(0, null)).toBe(false); // 0 > (null ?? 0) = 0 > 0 = false
      });
    });

    describe("getNextWeekOffset", () => {
      it("should increment current offset", () => {
        expect(getNextWeekOffset(0)).toBe(1);
        expect(getNextWeekOffset(5)).toBe(6);
        expect(getNextWeekOffset(-2)).toBe(-1);
      });
    });

    describe("getPreviousWeekOffset", () => {
      it("should decrement current offset but not go below 0", () => {
        expect(getPreviousWeekOffset(2)).toBe(1);
        expect(getPreviousWeekOffset(1)).toBe(0);
        expect(getPreviousWeekOffset(0)).toBe(0);
        expect(getPreviousWeekOffset(-1)).toBe(0);
      });
    });
  });
});
