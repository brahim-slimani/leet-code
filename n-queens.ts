function solveNQueens(n: number): string[][] {
     const result: string[][] = [];

    function isNotUnderAttack(row: number, col: number, board: number[]): boolean {
        for (let prevRow = 0; prevRow < row; prevRow++) {
            if (
                board[prevRow] === col ||
                board[prevRow] - prevRow === col - row ||
                board[prevRow] + prevRow === col + row
            ) {
                return false;
            }
        }
        return true;
    }

    function placeQueen(row: number, board: number[]): void {
        if (row === n) {
            result.push(board.map(col => '.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1)));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isNotUnderAttack(row, col, board)) {
                board[row] = col;
                placeQueen(row + 1, board.slice());
            }
        }
    }

    placeQueen(0, Array(n).fill(-1));

    return result;
};
