export const getLocalTimeZone = () =>
  Intl.DateTimeFormat().resolvedOptions().timeZone || 'Local time';

export const formatWallTime = (timestamp, timeZone) => {
  const options = {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
    ...(timeZone ? { timeZone } : {}),
  };

  return new Intl.DateTimeFormat('en-GB', options).format(timestamp);
};

export const formatElapsedTime = elapsedMs => {
  const totalSeconds = Math.max(0, Math.floor(elapsedMs / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const pad = value => String(value).padStart(2, '0');

  return hours > 0
    ? `${hours}:${pad(minutes)}:${pad(seconds)}`
    : `${minutes}:${pad(seconds)}`;
};
