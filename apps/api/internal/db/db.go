package db

import (
	"database/sql"
	_ "github.com/lib/pq"
)

func New(databaseURL string) (*sql.DB, error) {
	conn, err := sql.Open("postgres", databaseURL)
	if err != nil {
		return nil, err
	}
	conn.SetMaxOpenConns(25)
	conn.SetMaxIdleConns(5)
	if err := conn.Ping(); err != nil {
		return nil, err
	}
	return conn, nil
}
