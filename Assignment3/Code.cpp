#include<bits/stdc++.h>
using namespace std;
int main()
{
    int t,profit;
    cout<<"Time Unit: \t";
    cin>>t;
    cout<<"Earnings: \t";
    cin>>profit;
    int ans=1;
    int sumtheatre=0;
    while (t-(ans*5)>=0)
    {
        sumtheatre += (t-5*ans)*1500;
        if(sumtheatre==profit)
        {
            cout<<"T:"<<ans<<" P:0 C:0 \n";
            break;
        } 
        ans++;
    }
    ans=1;
    int sumpub=0;
    while (t-(ans*4)>=0)
    {
        sumpub += (t-4*ans)*1000;
        if(sumpub==profit)
        {
            cout<<"T:0 "<<"P:"<<ans<<" C:0 \n";
            break;
        } 
        ans++;
    }
     ans=1;
    int sumcomm=0;
    while (t-(ans*10)>=0)
    {
        sumcomm += (t-10*ans)*3000;
        if(sumcomm==profit)
        {
            cout<<"T:0 "<<"P:"<<" C:"<<ans<<"\n";
            break;
        } 
        ans++;
    }
    
}