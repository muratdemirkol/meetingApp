SET DATABASE SQL SYNTAX ORA TRUE;

create sequence SEQ_DEPARTMENT start with 1 increment by 50;
create sequence SEQ_EMPLOYEE start with 1 increment by 50;
create sequence SEQ_MEETING start with 1 increment by 50;
create table DEPARTMENT (ID bigint not null, DELETED boolean, INSERT_DTTM date, VERSION_DTTM date, DSC varchar(255), NAME varchar(255), primary key (ID));
create table EMPLOYEE (ID bigint not null, DELETED boolean, INSERT_DTTM date, VERSION_DTTM date, NAME varchar(255), SURNAME varchar(255),SALARY number(20), DEPARTMENT_ID bigint, primary key (ID));
create table MEETING (ID bigint not null, DELETED boolean, INSERT_DTTM date, VERSION_DTTM date, DSC varchar(255), NAME varchar(255), primary key (ID))
create table MEETING_DEPARTMENT (Meeting_ID bigint not null, departmentList_ID bigint not null);
create table RL_MEETING_AND_DEPARTMENT (DEPARTMENT_ID bigint not null, MEETING_ID bigint not null);
alter table EMPLOYEE add constraint FKfvt83ye0flecxfewcniue0n9n foreign key (DEPARTMENT_ID) references DEPARTMENT;
alter table MEETING_DEPARTMENT add constraint FK4o47851lilw7bktdmo9cu5vgg foreign key (departmentList_ID) references DEPARTMENT;
alter table MEETING_DEPARTMENT add constraint FKgw27eyfudu405ga8ivy6cjguo foreign key (Meeting_ID) references MEETING;
alter table RL_MEETING_AND_DEPARTMENT add constraint FKnt0yulbc4vdx9mixi6455pcgc foreign key (MEETING_ID) references MEETING;
alter table RL_MEETING_AND_DEPARTMENT add constraint FK9k0y0sf5wyj2rr3fg9x8hq6na foreign key (DEPARTMENT_ID) references DEPARTMENT;