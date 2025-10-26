import { CalendlyEventType } from "../../../../services/calendly-api";
import { convertEventTypeToService } from "../transformers";

// Mock des labels pour les tests
jest.mock("../../../../labels", () => ({
  servicesLabels: {
    service: {
      defaultDescription: "Description par défaut",
    },
  },
}));

describe("transformers", () => {
  describe("convertEventTypeToService", () => {
    const mockEventType: CalendlyEventType = {
      uri: "https://api.calendly.com/event_types/6d59d259-279c-4118-a685-77f75f692727",
      name: "Consultation initiale",
      active: true,
      slug: "consultation-initiale",
      scheduling_url: "https://calendly.com/user/consultation-initiale",
      duration: 30,
      description_plain: "Description de la consultation",
    };

    it("should convert Calendly event type to ServiceItem with correct price mapping", () => {
      const result = convertEventTypeToService(mockEventType);

      expect(result).toEqual({
        id: mockEventType.uri,
        title: mockEventType.name,
        description: mockEventType.description_plain,
        price: 25, // Prix correspondant à l'URI du mock
        duration: "30 min",
      });
    });

    it("should use default description when description_plain is not provided", () => {
      const eventTypeWithoutDescription: CalendlyEventType = {
        ...mockEventType,
        description_plain: undefined,
      };

      const result = convertEventTypeToService(eventTypeWithoutDescription);

      expect(result.description).toBe("Description par défaut");
    });

    it("should map different service URIs to correct prices", () => {
      const testCases = [
        {
          uri: "https://api.calendly.com/event_types/bcbe8dd5-e018-4fa1-ab93-cd07157f2ff1",
          expectedPrice: 60,
        },
        {
          uri: "https://api.calendly.com/event_types/7b22856b-0987-4d45-ab2a-83a54ea78a8e",
          expectedPrice: 40,
        },
        {
          uri: "https://api.calendly.com/event_types/01504ccf-9e71-4d57-9404-5ec5de4466bf",
          expectedPrice: 15,
        },
      ];

      testCases.forEach(({ uri, expectedPrice }) => {
        const eventType: CalendlyEventType = {
          ...mockEventType,
          uri,
        };

        const result = convertEventTypeToService(eventType);
        expect(result.price).toBe(expectedPrice);
      });
    });

    it("should return price 0 for unknown service URIs", () => {
      const unknownService: CalendlyEventType = {
        ...mockEventType,
        uri: "https://api.calendly.com/event_types/unknown-uuid",
      };

      const result = convertEventTypeToService(unknownService);
      expect(result.price).toBe(0);
    });

    it("should preserve all other fields correctly", () => {
      const result = convertEventTypeToService(mockEventType);

      expect(result.id).toBe(mockEventType.uri);
      expect(result.title).toBe(mockEventType.name);
      expect(result.duration).toBe(`${mockEventType.duration} min`);
    });

    it("should handle different durations correctly", () => {
      const eventTypeWithDifferentDuration: CalendlyEventType = {
        ...mockEventType,
        duration: 60,
      };

      const result = convertEventTypeToService(eventTypeWithDifferentDuration);
      expect(result.duration).toBe("60 min");
    });

    it("should handle empty description and use default", () => {
      const eventTypeWithEmptyDescription: CalendlyEventType = {
        ...mockEventType,
        description_plain: "",
      };

      const result = convertEventTypeToService(eventTypeWithEmptyDescription);
      expect(result.description).toBe("Description par défaut");
    });

    it("should convert HTML description to plain text when description_html is provided", () => {
      const eventTypeWithHtmlDescription: CalendlyEventType = {
        ...mockEventType,
        description_html: "<p>Description HTML</p><br>avec des balises",
        description_plain: undefined,
      };

      const result = convertEventTypeToService(eventTypeWithHtmlDescription);
      expect(result.description).toContain("Description HTML");
      expect(result.description).toContain("avec des balises");
    });

    it("should handle HTML description with multiple paragraphs", () => {
      const eventTypeWithMultipleParagraphs: CalendlyEventType = {
        ...mockEventType,
        description_html:
          "<p>Premier paragraphe</p><br><p>Deuxième paragraphe</p>",
        description_plain: undefined,
      };

      const result = convertEventTypeToService(eventTypeWithMultipleParagraphs);
      expect(result.description).toContain("Premier paragraphe");
      expect(result.description).toContain("Deuxième paragraphe");
    });

    it("should handle HTML description with only br tags", () => {
      const eventTypeWithBrTags: CalendlyEventType = {
        ...mockEventType,
        description_html: "Texte avec<br>saut de ligne",
        description_plain: undefined,
      };

      const result = convertEventTypeToService(eventTypeWithBrTags);
      expect(result.description).toContain("Texte avec");
      expect(result.description).toContain("saut de ligne");
    });
  });
});
