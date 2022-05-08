This wave of growing ed tech start-ups has not stopped post covid as students have been habituated to online learning. Research suggests that online learning has been shown to increase retention of
information, and takes less time. Students take up courses online but due to lack of  incentives/rewards they lose their motivation or get distracted and are unable to complete those courses. Moreover, trustworthy web-based courses can be costly, so not every person can get to them. Besides the certifications presented by a lot of people completing the courses don't have a lot of credibility since they can be forged easily.

We intend to solve these problems with the help of a blockchain based token technology. Teaching and learning can be benefited extensively from the use of Web 3.0 applications and services. Students will be rewarded for their learning with various rewards in the form of tokens, keeping them motivated to complete the course as well as keeping them excited to learn more. Instead of being a receiver of information, the student becomes the protagonist of the learning experience. Basically, this solution will transform passive learning to an active one. The rewards they receive will be proportional to the time they spend learning thus it gives students an incentive to learn more.
The main features of our platform are the award system and also the credibility of certificates which is granted by having those certificates on a blockchain.

We have completed the ui/ux and frontend implementation of the homepage of our website and have made few other pages required for the working. You can search for courses, login/sign up and see what the courses have to offer. We are making our own crypto token and for that we have written the code and are now trying to deploy it on the test rinkbey network to see its working. Certificate credibility we started writing the code, and in meantime we found an opensource code for E-verification of certificates, so we are now trying to integrate this repo with our code.

We created our own ERC20 token named Solaris (SLS) on Ethereum blockchain network which can be used for the transaction that take place on our web application. The final amount would be transferred to the individual whenever they wish to do so. They just need to go to their profile and click on “Transfer SLS" and we will send the outstanding amount to their Meta-mask Wallet D which they have provided to us during the sign up process.

Put simply, the ERC20 standard defines a set of functions to be implemented by all ERC20 tokens so as to allow integration with other contracts, wallets, or marketplaces. This set of functions is rather short and basic.


![1](https://user-images.githubusercontent.com/78211915/167284907-806df4c2-25f6-41dc-8e58-b3cb9f971947.PNG)

ERC20 functions allow an external user, say a crypto-wallet app, to find out a user’s balance and transfer funds from one user to another with proper authorization.
The smart contract defines two specifically defined events:

![2](https://user-images.githubusercontent.com/78211915/167284939-88e91c4d-91d7-42e9-9faa-be663b8a1e18.PNG)


These events will be invoked or emitted when a user is granted rights to withdraw tokens from an account, and after the tokens are actually transferred.
In addition to standard ERC20 functions, many ERC20 tokens also feature additional fields and some have become a de-facto part of the ERC20 standard, if not in writing then in practice. Here are a few examples of such fields.

![3](https://user-images.githubusercontent.com/78211915/167284941-af3aac98-a148-4ee5-9276-36895811e3e2.PNG)


Writing an ERC20 Token in Solidity	 

Setting the Number of ICO Tokens	
Set the total amount of tokens at contract creation time and initially assign all of them to the “contract owner” i.e. the account that deployed the smart contract:

![4](https://user-images.githubusercontent.com/78211915/167284946-42d463b4-854f-44e8-845f-e931d0ebb230.PNG)


Get Total Token Supply

![5](https://user-images.githubusercontent.com/78211915/167284949-aca75094-af71-43b9-9e69-969e44980272.PNG)


Get Token Balance of Owner

![6](https://user-images.githubusercontent.com/78211915/167284952-bd2b5597-71bf-4f0d-a842-b4edf0ac82e8.PNG)


Transfer Tokens to Another Account

![7](https://user-images.githubusercontent.com/78211915/167284959-76572a3f-76e0-4764-930e-0a4eee7d078d.PNG)


Approve Delegate to Withdraw Tokens

![8](https://user-images.githubusercontent.com/78211915/167284968-3b19831a-8fbb-4f1a-98cf-b93906352a7e.PNG)


Get Number of Tokens Approved for Withdrawal

![9](https://user-images.githubusercontent.com/78211915/167284973-64ef459a-02ff-4296-9365-b0aa180ae2f2.PNG)


Transfer Tokens by Delegate

![10](https://user-images.githubusercontent.com/78211915/167284981-7f655358-71b5-435d-92e2-5c25e70b4c98.PNG)

Ethereum Contract Deployment
When it comes to deploy our contract to the blockchain. Our contract will be transferred to all nodes participating in the network. Any and all changes made to the contract will be propagated to all participating nodes.
We have used deployment tools such as Truffle. But even Truffle is overkill for the limited needs of this, and a simple online tool called Remix will suffice.
To use it, you will need to install the MetaMask plugin on your browser and a Rinkeby (Ethereum test network) account with at least some Rinkeby Ether in it.Some fake trial ether can be obtained from any of the online faucets for Rinkbey network
