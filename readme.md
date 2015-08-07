# CSV-Iter

Iterate CSV data.

# Examples

By column number

    var iter = CSV.generateIterator(CSV.parse(xhr.response));
    while (iter.next()) {
        document.write(iter.row(1));
        document.write(iter.row(2));
    }

By field name.

    var iter = CSV.generateIterator(CSV.parse(xhr.response), true);
    while (iter.next()) {
        document.write(iter.row('カラム1'));
        document.write(iter.row('カラム2'));
    }

Get CSV from file

	var xhr = new XMLHttpRequest();
    xhr.open("GET", './test.csv', false);
    xhr.send(null);
    var iter = CSV.generateIterator(CSV.parse(xhr.response));
    while (iter.next()) {
        document.write(iter.row(1));
        document.write(iter.row(2));
    }
