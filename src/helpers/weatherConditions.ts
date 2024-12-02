export const weatherConditions:Record<string, number[]> = {
  'Clear': [1000],
  'Cloudy': [1003, 1006, 1009, 1030, 1135, 1147],
  'Storm': [1063, 1072, 1087, 1150, 1153, 1168, 1171, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1240, 1243, 1246, 1273, 1276, 1279],
  'Snow': [1066, 1069, 1114, 1117, 1204, 1207, 1210, 1213, 1216, 1219, 1222, 1225, 1237, 1249, 1252, 1255, 1258, 1261, 1264, 1282],
}

export const bgMap: Record<string, string> = {
  ClearDay: "bg-ClearDay",
  ClearNight: "bg-ClearNight",
  CloudyDay: "bg-CloudyDay",
  CloudyNight: "bg-CloudyNight",
  SnowDay: "bg-SnowDay",
  SnowNight: "bg-SnowNight",
  StormDay: "bg-StormDay",
  StormNight: "bg-StormNight",
};