
#include<bits/stdc++.h>
using namespace std;
int main(){
    int n,k,p=1,x;
    long long r=0;
    std::cin>>n>>k;
    while(k--){
        cin>>x;
        r=r+(x-p+n)%n;
        p=x;
        }
        cout<<r;
    
}