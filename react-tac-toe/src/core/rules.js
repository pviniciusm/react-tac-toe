export const winnerPlayer = (rows) => {
    let row1 = rows[0],
        row2 = rows[1],
        row3 = rows[2];
    let winner = "";

    // Vencedor na posição horizontal
    rows.forEach((row) => {
        if (
            areEqualAndNotEmpty(
                row.columns[0].value,
                row.columns[1].value,
                row.columns[2].value
            )
        ) {
            winner = row.columns[0].value;
        }
    });

    if (winner !== "") {
        return winner;
    }

    // Vencedor na posição vertical
    for (let i = 0; i < 3; i++) {
        if (
            areEqualAndNotEmpty(
                row1.columns[i].value,
                row2.columns[i].value,
                row3.columns[i].value
            )
        ) {
            return row1.columns[i].value;
        }
    }

    // Vencedor em diagonal Up to Down
    if (
        areEqualAndNotEmpty(
            row1.columns[0].value,
            row2.columns[1].value,
            row3.columns[2].value
        )
    ) {
        return row1.columns[0].value;
    }

    // Vencedor em diagonal Down to Up
    if (
        areEqualAndNotEmpty(
            row1.columns[2].value,
            row2.columns[1].value,
            row3.columns[0].value
        )
    ) {
        return row1.columns[2].value;
    }

    // Check if all positions are marked
    const allMarkedRows = rows.filter((row) => {
        const markedColumns = row.columns.filter((column) => !!column.value);
        return markedColumns.length === row.columns.length;
    });

    // All positions are marked -> game is over
    if (allMarkedRows.length === rows.length) {
        return "draw";
    }

    return undefined;
};

export const areEqualAndNotEmpty = (v0, v1, v2) => {
    if (v0 === v1 && v1 === v2 && v0 !== "") {
        return true;
    }
    return false;
};
