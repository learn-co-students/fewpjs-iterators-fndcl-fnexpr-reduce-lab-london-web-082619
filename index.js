const batteryBatches = [1, 2, 3, 4, 5, 16];

const countBatteries = (totalAmt, batteryBatch) => totalAmt + batteryBatch;

const totalBatteries = batteryBatches.reduce(countBatteries, 0) 

