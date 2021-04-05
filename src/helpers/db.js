import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('places.db');

export const init = () => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql(
                'CREATE TABLE IF NOT EXISTS places (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, description TEXT NOT NULL);',
                [],
                () => resolve(),
                (_, err) => reject(err),
            );
        })
    });
};

export const insertPlace = ({title, description}) => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql(
                // `INSERT INTO place (title, description) VALUES (${title}, ${description});`,
                'INSERT INTO places (title, description) VALUES (?, ?);',
                [title, description],
                () => resolve(),
                (_, err) => reject(err),
            );
        })
    });
}

export const loadPlace = () => {
    return new Promise((resolve, reject) => {
        db.transaction((transaction) => {
            transaction.executeSql(
                'Select * from places;',
                [],
                (_, res) => resolve(res),
                (_, err) => reject(err),
            );
        })
    });
}