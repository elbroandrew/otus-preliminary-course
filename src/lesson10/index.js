
//RegExp
//check email, date, phone number
const input = prompt('Enter email');
//1 check email:
const regexp = /[a-zA-Z\.0-9_-]+@[a-z0-9]+\.[a-z]{2,3}/;
// console.log(regexp.test(input));

//2
/* 
только для YYYY/DD/MM и знаками '.' , '/' , '-'
*/
const regex_date = /(((19\d{2}|20[0-9]{2}))(\/|\.|\-)(0?[1-9]|1[0-9]|2[0-9]|3[0-1])(\/|\.|\-))(0[0-9]$|1[0-2]$|[0-9]$)/;
//проходят проверку

const arr = [
'1999/10/1',
'1999.5.5',
'2018-20-03',
'1999/21/12',
'2002.1.2',
];
//не проходят проверку
const arr2 = [
'2000/111/22',
'2000/11/222',
'66/212/1999',
'11/22/3000',
'2100/111/22',
'2100-20-03',
'1999-222-03',
'1999-12-122',
'199.12.03',
'199/12/03',
'03/12/199',
'199/12/03',
'199/3/12',
'11.222.1999',
'222.11.1999',
'1999. 19.2',
'1999 /19/2',
'1999 19 2'

]

const dateMatch = (dates) => {
    dates.forEach( function(element) {
        console.log(regex_date.test(element));
    });
}

dateMatch(arr);

//3 check phone
const regexp_phone = /((^\+[7])|(^[8]))((\d{10}$)|(([\s\-]\d{3}){2}((([\s\-]\d{2}){2})|(\s\d{4}))))/;

/*
проходят:
+7 123 456 78 90
+7-123-456-78-90
+71234567890
8 123 456 78 90
8-123-456-78-90
81234567890
+7 123 456-78-90
8 999 999 9999

не проходят:
+71 23 456 78 90
+7 999999 9999
8123 456 7890
+81234567890
+71234567890000000
8 12 345 67 890
+7            ;
8 23         ;
+7-1-2-3-4-5-6-7-8-9-0
8-----------------
8 999 999
+7 - — — —-
+7123 4567 890
8--------123456-------789------------------0123
9091234567
909 123 45 67
909-123-45-67 

*/

//console.log(regexp_phone.test(input));