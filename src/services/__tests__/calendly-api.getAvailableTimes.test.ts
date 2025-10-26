import { generateFutureDates } from "../../components/Main/Services/Calendar/helpers";

describe("Calendar Week Navigation Logic", () => {
  describe("generateFutureDates", () => {
    it("should generate current week dates for offset 0", () => {
      const now = new Date("2024-01-15T10:00:00.000Z"); // Lundi
      jest.useFakeTimers();
      jest.setSystemTime(now);

      const { startTime, endTime } = generateFutureDates(0);

      // Pour la première requête, commence maintenant + 5min
      const expectedStartTime = new Date(now.getTime() + 5 * 60 * 1000);
      expect(new Date(startTime)).toEqual(expectedStartTime);

      // Se termine le dimanche de la même semaine (permettre un décalage d'une heure)
      const actualEndTime = new Date(endTime);
      expect(actualEndTime.getDate()).toBe(21); // Dimanche 21 janvier
      expect(actualEndTime.getHours()).toBeGreaterThan(20); // Vers la fin de la journée

      jest.useRealTimers();
    });

    it("should generate next week dates for offset 1", () => {
      const now = new Date("2024-01-15T10:00:00.000Z"); // Lundi
      jest.useFakeTimers();
      jest.setSystemTime(now);

      const { startTime, endTime } = generateFutureDates(1);

      // Commence lundi de la semaine suivante
      const actualStartTime = new Date(startTime);
      expect(actualStartTime.getDate()).toBe(22); // Lundi 22 janvier
      expect(actualStartTime.getHours()).toBeLessThan(2); // Début de journée

      // Se termine dimanche de la semaine suivante
      const actualEndTime = new Date(endTime);
      expect(actualEndTime.getDate()).toBe(28); // Dimanche 28 janvier
      expect(actualEndTime.getHours()).toBeGreaterThan(20); // Fin de journée

      jest.useRealTimers();
    });

    it("should handle week transitions correctly", () => {
      const now = new Date("2024-01-15T10:00:00.000Z"); // Lundi
      jest.useFakeTimers();
      jest.setSystemTime(now);

      // Test plusieurs semaines
      const week0 = generateFutureDates(0);
      const week1 = generateFutureDates(1);
      const week2 = generateFutureDates(2);

      // Vérifier que les semaines se suivent correctement
      expect(new Date(week1.startTime).getTime()).toBeGreaterThan(
        new Date(week0.endTime).getTime() - 1000
      );
      expect(new Date(week2.startTime).getTime()).toBeGreaterThan(
        new Date(week1.endTime).getTime() - 1000
      );

      jest.useRealTimers();
    });

    it("should handle different days of the week correctly", () => {
      // Test depuis un mercredi
      const wednesday = new Date("2024-01-17T10:00:00.000Z"); // Mercredi
      jest.useFakeTimers();
      jest.setSystemTime(wednesday);

      const { endTime } = generateFutureDates(0);

      // Doit toujours finir le dimanche de la même semaine
      const actualEndTime = new Date(endTime);
      expect(actualEndTime.getDate()).toBe(21); // Dimanche 21 janvier
      expect(actualEndTime.getHours()).toBeGreaterThan(20); // Fin de journée

      jest.useRealTimers();
    });
  });

  describe("Week-based calendar navigation scenarios", () => {
    it("should provide correct date ranges for consecutive weeks", () => {
      const now = new Date("2024-01-15T10:00:00.000Z"); // Lundi
      jest.useFakeTimers();
      jest.setSystemTime(now);

      const currentWeek = generateFutureDates(0);
      const nextWeek = generateFutureDates(1);
      const weekAfter = generateFutureDates(2);

      // Vérifier que les dates sont dans le bon ordre
      expect(new Date(currentWeek.startTime).getTime()).toBeLessThan(
        new Date(nextWeek.startTime).getTime()
      );
      expect(new Date(nextWeek.startTime).getTime()).toBeLessThan(
        new Date(weekAfter.startTime).getTime()
      );

      // Vérifier l'espacement d'une semaine (7 jours)
      const daysBetween =
        (new Date(nextWeek.startTime).getTime() -
          new Date(currentWeek.startTime).getTime()) /
        (1000 * 60 * 60 * 24);
      expect(Math.abs(daysBetween - 7)).toBeLessThan(1); // Environ 7 jours

      jest.useRealTimers();
    });

    it("should always span exactly 7 days for non-zero offsets", () => {
      const now = new Date("2024-01-15T10:00:00.000Z");
      jest.useFakeTimers();
      jest.setSystemTime(now);

      for (let offset = 1; offset <= 5; offset++) {
        const { startTime, endTime } = generateFutureDates(offset);

        const start = new Date(startTime);
        const end = new Date(endTime);

        // Doit être exactement 7 jours (du lundi au dimanche)
        const diffInDays =
          (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
        expect(diffInDays).toBeCloseTo(7, 1);

        // Le lundi doit être en début de journée
        const startHours = start.getUTCHours();
        expect(startHours === 0 || startHours === 23).toBe(true); // Début ou fin de journée selon fuseau

        // Le dimanche doit être en fin de journée
        const endHours = end.getUTCHours();
        expect(endHours === 23 || endHours === 22).toBe(true); // Fin de journée selon fuseau
        expect(end.getUTCMinutes()).toBeGreaterThan(55);
      }

      jest.useRealTimers();
    });

    it("should correctly transition from 3-day periods to weekly periods", () => {
      const now = new Date("2024-01-15T10:00:00.000Z");
      jest.useFakeTimers();
      jest.setSystemTime(now);

      // Tester les transitions de semaine
      const currentWeek = generateFutureDates(0);
      const nextWeek = generateFutureDates(1);

      // La semaine actuelle commence maintenant + 5min
      const currentStart = new Date(currentWeek.startTime);
      const expectedStart = new Date(now.getTime() + 5 * 60 * 1000);
      expect(currentStart.getTime()).toBe(expectedStart.getTime());

      // La semaine suivante commence un lundi
      const nextStart = new Date(nextWeek.startTime);
      expect(nextStart.getDay()).toBe(1); // Lundi = 1

      jest.useRealTimers();
    });
  });
});
