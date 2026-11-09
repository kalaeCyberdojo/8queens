function solveNQueens(n = 8) {
    const result = [];
    const cols = new Set();
    const diagonals = new Set();
    const antiDiagonals = new Set();
    const state = [];

    function backtrack(row) {
        if (row === n) {
            result.push(createBoard(state, n));
            return;
        }

        for (let col = 0; col < n; col++) {
            const currDiag = row - col;
            const currAntiDiag = row + col;

            if (cols.has(col) || diagonals.has(currDiag) || antiDiagonals.has(currAntiDiag)) {
                continue;
            }

            cols.add(col);
            diagonals.add(currDiag);
            antiDiagonals.add(currAntiDiag);
            state.push(col);

            backtrack(row + 1);

            state.pop();
            antiDiagonals.delete(currAntiDiag);
            diagonals.delete(currDiag);
            cols.delete(col);
        }
    }

    function createBoard(state, n) {
        const board = [];
        for (let row = 0; row < n; row++) {
            const col = state[row];
            board.push(".".repeat(col) + "Q" + ".".repeat(n - col - 1));
        }
        return board;
    }

    backtrack(0);
    return result;
}


const solutions = solveNQueens(8);
console.log(`Total solutions found: ${solutions.length}\n`);

console.log("First solution layout:");
solutions[0].forEach(row => console.log(row));