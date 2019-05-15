mkdir -p data/raw/real
mkdir -p data/json/real

touch data/raw/real/date.raw
date > data/raw/real/date.raw

touch data/raw/real/diskspace.raw
df -H | grep /dev/disk1s1 > data/raw/real/diskspace.raw
