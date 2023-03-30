import { Filters } from "../context";
import { Participant } from "../types";

const FILTERS_KEY = "filters";
const PARTICIPANTS_KEY = "participants";

const saveData = <T>(key: string, data: T) => {
  const text = JSON.stringify(data);
  localStorage.setItem(key, text);
};

const loadData = <T>(key: string): T => {
  const text = localStorage.getItem(key);
  return text && JSON.parse(text);
};

export const saveFilters = (filters: Filters) => {
  return saveData(FILTERS_KEY, filters);
};

export const saveParticipants = (participants: Participant[]) => {
  return saveData(PARTICIPANTS_KEY, participants);
};

export const loadFilters = () => {
  return loadData<Filters>(FILTERS_KEY);
};

export const loadParticipants = () => {
  return loadData<Participant[]>(PARTICIPANTS_KEY);
};
