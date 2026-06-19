# Pi 5 Rev 1.0 - Test Points

## Board Image
![Test Points](/pi5/rev-1.0/images/test_points.png)

## Readings

* `Powered` - These measurements were taken with the board plugged in/powered on, and
  *nothing* else plugged in including no SD Card inserted
* `OS Idle` - These measurements were taken with the board booted into Raspberry PI OS.
  These tests are different from Power Only in that the SD card is inserted
  and we have booted from it.
* `Resistance` - These measurements were taken **without** power. This is a measurement
  of resistance to ground from the given test point.


| Test Point | Zone | Powered | OS Idle | Resistance |
|------------|------|-------- | ------- | ---------- |
| TP1        | 5    | 3.32v   | 3.33v   | 12.8K Ω    |
| TP2        | 6    | 3.32v   | 3.33v   | 0.55M Ω    |
| TP3        | 2    | 0v      | 0v      | 0.2 Ω      |
| TP4        | 6    | 0v      | 0v      | 4.1M Ω     |
| TP5        | 4    | 3.29v   | 3.33v   | OL         |
| TP6        | 4    | 3.30v   | 3.33v   | OL Ω       |
| TP7        | 6    | 0v      | 0v      | 0.2 Ω      |
| TP8        | 6    | 0v      | 0v      | 0.2 Ω      |
| TP9        | 5    | 3.32v   | 3.32v   | 12.3K Ω    |
| TP10       | 1    | 3.32v   | 3.32v   | 62.7K Ω    |
| TP11       | 6    | 5.43v   | 5.20v   | OL         |
| TP12       | 6    | 5.43v   | 5.20v   | OL         |
| TP13       | 5    | 0v      | 0v      | 0.2 Ω      |
| TP14       | 5    | 0v      | 0v      | 0.99K Ω    |
| TP15       | 6    | 0.80v   | 0.80v   | 10.64K Ω   |
| TP16       | 5    | 3.46v   | 3.33v   | 12.9K Ω    |
| TP17       | 5    | 3.32v   | 3.33v   | 12.8K Ω    |
| TP18       | 3    | 1.80v   | 1.80v   | 11.7K Ω    |
| TP19       | 2    | 0v      | 0v      | 1.06M Ω    |
| TP20       | 5    | 0v      | 0v      | 1.06M Ω    |
| TP21       | 6    | 3.32v   | 3.33v   | OL         |
| TP22       |      |         |         |            |
| TP23       | 2    | 0v      | 0v      | 3.91M Ω    |
| TP24       | 3    | 0v      | 3.3v    | OL Ω       |
| TP25       | 1    | 0v      | 0v      | 0.4 Ω      |
| TP26       | 4    | 0v      | 0v      | 0.2 Ω      |
| TP27       | 1    | 1.10v   | 1.11v   | 0.9K Ω     |
| TP28       | 6    | 0v      | 0.72v   | 1.7 Ω      |
| TP29       | 3    | 0.80v   | 0.80v   | 118.3 Ω    |
| TP30       | 2    | 0.60v   | 0.60v   | 20.3K Ω    |
| TP31       | 2    | 1.11v   | 1.11v   | 97.3 Ω     |
| TP32       | 6    | 3.72v   | 3.73v   | 23.9K Ω    |
| TP33       | 3    | 3.32v   | 3.33v   | 7.8K Ω     |
| TP34       | 2    | 1.81v   | 1.81    | 10.6K Ω    |
| TP35       | 5    | 0v      | 3.33v   | 1.06M Ω    |
| TP36       | 5    | 0v      | 3.31v   | 1.06M Ω    |
| TP37       | 6    | 0v      | 0v      | 3.9M Ω     |
| TP38       | 3    | 3.30v   | 0.06v   | OL         |
| TP39       | 6    | 3.32v   | 3.33v   | OL         |
| TP40       | 5    | 0v      | 3.32v   | 10.3K Ω    |
| TP41       | 5    | 3.32v   | 3.32v   | 10.3K Ω    |
| TP42       | 6    | 3.48v   | 3.33v   | 12K Ω      |
| TP43       | 1    | 0v      | 0v      | 0.99K Ω    |
| TP44       | 1    | 0v      | 2.50v   | 18.1K Ω    |
| TP45       | 1    | 1.10v   | 1.10v   | 60.5K Ω    |
| TP46       | 1    | 0v      | 0v      | 0.2 Ω      |
| TP47       | 4    | 0v      | 0v      | OL         |
| TP48       | 4    | 3.25v   | 3.26v   | 9.1K Ω     |
| TP49       | 4    | 3.30v   | 3.31v   | 1.06M Ω    |
| TP50       | 4    | 0.21v   | 0.21v   | 1.05M Ω    |
| TP51       | 5    | 3.30v   | 3.31v   | 1.06M Ω    |
| TP52       | 5    | 0v      | 0v      | 1.05M Ω    |
| TP53       | 1    | 3.31v   | 3.32v   | OL         |
| TP54       | 1    | 0.11v   | 0.15v   | OL         |
| TP55       | 1    | 3.31v   | 3.32v   | OL         |
| TP56       | 1    | 0.24v   | 3.32v   | OL         |
| TP57       | 4    | 3.32v   | 3.33v   | 0.42M Ω    |
| TP58       | 5    | 0v      | 0v      | 75.1 Ω     |
| TP59       |      |         |         |            |
| TP60       | 1    | 0v      | 0v      | 0.2 Ω      |
| TP61       | 6    | 0v      | 0v      | 0.2 Ω      |
| TP62       | 3    | 0v      | 0v      | 0.2 Ω      |
| TP63       | 6    | 5.42v   | 5.19v   | OL         |
| TP64       | 1    | 0.89v   | 1.01v   | 0.89K Ω    |
| TP65       | 1    | 0v      | 0v      | 21.9K Ω    |
| TP66       | 1    | 0v      | 3.32v   | 10.3K Ω    |
| TP67       | 1    | 5.42v   | 5.19v   | 19.2K Ω    |
| TP68       | 1    | 0v      | 0v      | 0.45M Ω    |
| TP69       | 1    | 0v      | 0v      | 69.8K Ω    |
| TP70       | 1    | 0v      | 0v      | 0.45M Ω    |
| TP71       | 1    | 0v      | 0v      | 72.1K Ω    |
| TP72       | 2    | 0v      | 0v      | 0.2 Ω      |
| TP73       | 4    | 0v      | 0v      | 0.2 Ω      |
| TP74       | 1    | 5.42v   | 5.29v   | 19.2K Ω    |
| TP75       |      |         |         |            |
| TP76       | 1    | 5.42v   | 5.19v   | 19.1K Ω    |
