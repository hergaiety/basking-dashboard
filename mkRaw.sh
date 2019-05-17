mkdir -p data/raw/real
mkdir -p data/json

touch data/raw/real/date.raw
date > data/raw/real/date.raw
echo "date.raw updated"

touch data/raw/real/diskspace.raw
df | grep /dev/md0 > data/raw/real/diskspace.raw
echo "diskspace.raw updated"

touch data/raw/real/usage.raw
top -b -n2 -p 1 | fgrep "Cpu(s)" | tail -1 | awk -F'id,' -v prefix="$prefix" '{ split($1, vs, ","); v=vs[length(vs)]; sub("%", "", v); printf "%s%.1f%%\n", prefix, 100 - v }' > data/raw/real/cpuusage.raw
echo "cpuusage.raw updated"

touch data/raw/real/uptime.raw
uptime -s > data/raw/real/uptime.raw
echo "uptime.raw updated"

