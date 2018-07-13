let balance = 10000;

if (balance > 500)
{
    console.log('Withdrawal SUCCESS! Your new balance is RS' + " " + (balance - 500)  + " " + "only" );
}
else
{
    console.log('Withdrawal FAILED! Sorry, you do not have sufficient balance.');
}