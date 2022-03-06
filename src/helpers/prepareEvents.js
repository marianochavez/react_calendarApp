
export const prepareEvents = (events = []) => {
    
    return events.map(event => {
        return {
            ...event,
            // start: moment(event.start).toDate(),
            start: new Date(event.start),
            end: new Date(event.end),
        }
    });
}