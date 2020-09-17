function arraysCount(n, m, totalCost) {
    let dp = [];
    let cum = [];
    let mod = 1e9 + 7;
    for(let j = 1; j <= m.length; j++) {
        dp[1][j][0] = 1;
        cum[1][j][0] = j;
    }

    for(let i = 2; i <= n.length; i++) {
        console.log("i: "+i);
        for(let j = 1; j <= m.length; j++) {
            console.log("j: "+j);
            for(let k = 0; k <= totalCost.length; k++) {
                console.log("k: "+k);
                dp[i][j][k] = (j * dp[i-1][j][k]);
                dp[i][j][k] %= mod;
                dp[i][j][k] += cum[i-1][j-1][k-1];
                dp[i][j][k] %= mod;
                cum[i][j][k] = (cum[i][j-1][k] + dp[i][j][k]) % mod;
            }
        }
    }
    console.log("CUM: "+cum);
    console.log("DP:  "+dp);
    return cum;
}


console.log("Solution: "+arraysCount([2,3,4],[3,3,3],[1,2,2]));
