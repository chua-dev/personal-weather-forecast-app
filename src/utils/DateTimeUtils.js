


const date = new Date();

export function getUTCDateTime() {
    const utcTime = date.toLocaleString('en-US',
    {
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h23',
        timeZone: 'UTC',
    }
    );

    const isoDateString = new Date().toISOString();
    const utcDate = isoDateString.split('T')[0].concat(' ', utcTime);
    return utcDate;
}