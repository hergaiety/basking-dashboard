mkdir -p data/raw/real
mkdir -p data/json

touch data/raw/real/date.raw
date > data/raw/real/date.raw
echo "date.raw updated"

touch data/raw/real/diskspace.raw
df | grep /dev/md0 > data/raw/real/diskspace.raw
echo "diskspace.raw updated"
