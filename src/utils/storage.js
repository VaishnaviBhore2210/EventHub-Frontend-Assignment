import initialEvents from '../data/events';

const EVENTS_KEY = 'eventhub_events_v2';
const REGISTRATIONS_KEY = 'eventhub_registrations_v2';

export function getEvents() {
  try {
    const savedEvents = localStorage.getItem(EVENTS_KEY);
    if (savedEvents) return JSON.parse(savedEvents);
    localStorage.setItem(EVENTS_KEY, JSON.stringify(initialEvents));
  } catch (error) {
    console.error('Could not read saved events:', error);
  }
  return initialEvents;
}

export function saveEvents(events) {
  localStorage.setItem(EVENTS_KEY, JSON.stringify(events));
}

export function getRegistrations() {
  try {
    return JSON.parse(localStorage.getItem(REGISTRATIONS_KEY)) || [];
  } catch (error) {
    console.error('Could not read registrations:', error);
    return [];
  }
}

export function saveRegistrations(registrations) {
  localStorage.setItem(REGISTRATIONS_KEY, JSON.stringify(registrations));
}