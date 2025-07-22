const CALENDLY_API_BASE = "https://stoplight.io/mocks/calendly/api-docs/395";
const MOCK_TOKEN = "mock-token";

export interface CalendlyEventType {
  uri: string;
  name: string;
  active: boolean;
  slug: string;
  scheduling_url: string;
  duration: number;
  description_plain?: string;
  description_html?: string;
}

export interface CalendlyEventTypesResponse {
  collection: CalendlyEventType[];
  pagination?: {
    count: number;
    next_page?: string;
    previous_page?: string;
  };
}

export interface CalendlyAvailableTime {
  status: string;
  invitees_remaining: number;
  start_time: string;
  scheduling_url: string;
}

export interface CalendlyAvailableTimesResponse {
  collection: CalendlyAvailableTime[];
}

class CalendlyApiService {
  private async fetchWithAuth(
    url: string,
    options: RequestInit = {}
  ): Promise<Response> {
    const headers = {
      Accept: "application/json",
      Authorization: `Bearer ${MOCK_TOKEN}`,
      ...options.headers,
    };

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} - ${response.statusText}`);
    }

    return response;
  }

  async getEventTypes(): Promise<CalendlyEventTypesResponse> {
    try {
      const response = await this.fetchWithAuth(
        `${CALENDLY_API_BASE}/event_types`
      );
      return await response.json();
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des types d'événements:",
        error
      );
      throw error;
    }
  }

  async getAvailableTimes(
    eventTypeUri: string,
    startTime: string,
    endTime: string
  ): Promise<CalendlyAvailableTimesResponse> {
    try {
      const params = new URLSearchParams({
        event_type: eventTypeUri,
        start_time: startTime,
        end_time: endTime,
      });

      const response = await this.fetchWithAuth(
        `${CALENDLY_API_BASE}/event_type_available_times?${params}`
      );

      return await response.json();
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des créneaux disponibles:",
        error
      );
      throw error;
    }
  }
}

export const calendlyApi = new CalendlyApiService();
