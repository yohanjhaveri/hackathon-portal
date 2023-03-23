import { locations, status, timezones } from "../config";
import type { Filters } from "../context/FiltersContext";
import type { FiltersSchema, Participant, Team } from "../types";

export const filtersSchema: FiltersSchema = {
  location: {
    title: "Location",
    options: locations,
  },
  timezone: {
    title: "Timezone",
    options: timezones,
  },
  status: {
    title: "Status",
    options: status,
  },
};

export const filterParticipants = (participants: Participant[], teams: Team[], filters: Filters) => {
  return participants.filter((p) => {
    // SEARCH
    if (
      !p.name.toLowerCase().includes(filters.search.toLowerCase()) &&
      !p.skills.find((skill) => skill.includes(filters.search.toLowerCase()))
    ) {
      return false;
    }

    // COUNTRY
    if (!filters.location.includes(p.location)) {
      return false;
    }

    // TIMEZONE
    if (!filters.timezone.includes(p.timezone)) {
      return false;
    }

    // STATUS
    const status = teams.find((t) => t.members.find((m) => m.id === p.id))
      ? "Part of a Team"
      : "Not Part of a Team";

    if (!filters.status.includes(status)) {
      return false;
    }

    return true;
  });
};
