const s = '08:01:00PM'

const hoursToAdd = s.includes('PM') ? 12 : 0

const timeSplit = s.split(':')

const finalHour = (!s.includes('PM') && timeSplit[0] == '12') ? 0 : (parseInt(timeSplit[0]) + hoursToAdd) == 24 ? 12 : (parseInt(timeSplit[0]) + hoursToAdd)

const final = finalHour.toString().padStart(2, '0') + ':' + timeSplit.join(':').substring(3, 8)

console.log(final)

88649539734