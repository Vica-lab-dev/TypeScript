//LogEntry
//Greska: poruka (string)
//Datum i vreme kada se desila greska (dateTime)
//LogLevel: info, Warning, Error

type logLevel = "INFO" | "WARNING" | "ERROR";

type logEntry = [string, Date, logLevel];

const serverLogs: logEntry[] = [
    ["Warn: 222", new Date("2026-01-01 00:02:05"), "WARNING"]
]