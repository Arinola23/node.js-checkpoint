       //TASK 4
        //function to generate one password
       let generatePassword = require('generate-password')
         
      // Generate password with specified length and character types
       let password = generatePassword.generate({
        length: 10,
        numbers: true,
        symbols: true,
        uppercase: true,
       })
        console.log(password);

        //to generate multiple passwords
    //    let generatePassword = require('generate-password');

    //    let passwords = generatePassword.generateMultiple(3, {
    //        length: 10,
    //        uppercase: false,
    //        symbols: true,
    //    });
       
    //    // [ 'hnwulsekqn', 'qlioullgew', 'kosxwabgjv' ]
    //    console.log(passwords);