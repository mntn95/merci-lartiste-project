// Déclaration de type pour les variables d'environnement React
declare const process: {
  env: {
    REACT_APP_CALENDLY_PAT?: string;
  };
};

const CALENDLY_API_BASE = "https://api.calendly.com";
const ACCESS_TOKEN = process.env.REACT_APP_CALENDLY_PAT;

export interface CalendlyUser {
  uri: string;
  name: string;
  slug: string;
  email: string;
  scheduling_url: string;
  timezone: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface CalendlyUserResponse {
  resource: CalendlyUser;
}

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
  private userUri: string | null = null;

  private async fetchWithAuth(
    url: string,
    options: RequestInit = {}
  ): Promise<Response> {
    if (!ACCESS_TOKEN) {
      throw new Error(
        "Token d'accès Calendly manquant. Vérifiez la variable d'environnement REACT_APP_CALENDLY_PAT."
      );
    }

    const headers = {
      Accept: "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
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

  async getCurrentUser(): Promise<CalendlyUser> {
    try {
      const response = await this.fetchWithAuth(
        `${CALENDLY_API_BASE}/users/me`
      );
      const data: CalendlyUserResponse = await response.json();
      this.userUri = data.resource.uri;
      return data.resource;
    } catch (error) {
      console.error("Erreur lors de la récupération de l'utilisateur:", error);
      throw error;
    }
  }

  private async ensureUserUri(): Promise<string> {
    if (!this.userUri) {
      const user = await this.getCurrentUser();
      return user.uri;
    }
    return this.userUri;
  }

  async getEventTypes(): Promise<CalendlyEventTypesResponse> {
    try {
      const userUri = await this.ensureUserUri();
      const params = new URLSearchParams({
        user: userUri,
        count: "20",
        active: "true",
      });

      const response = await this.fetchWithAuth(
        `${CALENDLY_API_BASE}/event_types?${params}`
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

export { CalendlyApiService };
export const calendlyApi = new CalendlyApiService();
