/* Create Table */

CREATE TABLE Tutors (
    TUTOR_ID INT NOT NULL AUTO_INCREMENT,
    FIRST_NAME VARCHAR(45),
    LAST_NAME VARCHAR(45),
    IS_ACTIVE TINYINT NOT NULL,
    SUBJECT_ID INT,
    PRICE INT,
    CV BLOB,
    PRIMARY KEY (TUTOR_ID)
);

/* Insert Into Table */

INSERT INTO tutor (FIRST_NAME,LAST_NAME,IS_ACTIVE, SUBJECT_ID, PRICE) 
VALUES ( , , , , );

/* Delete From Table */
DELETE FROM tutor WHERE TUTOR_ID = 1;