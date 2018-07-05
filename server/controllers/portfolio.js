const Portfolio = require('../models').Portfolio;
const Coin = require('../models').Coin;
const Transaction = ('../model').Transaction;

updateWallet = (portfolio, type, amount) => {
    if(portfolio){
        Coin.findOne({
            where: {
              portfolioId: curPortfolio.id,
              type: type
            }
        })
        .then(curCoin => {
            if(curCoin){
                curCoin.update({
                    amount: curCoin.amount + amount
                })
                .catch((err) => res.status(400).send({error: err}));
            } else {
                return Coin
                .create({
                    type: type,
                    amount: amount
                })
                .catch((err) => res.status(400).send({error: err}));
            }
        })
        .catch(err => res.status(400).send(err));
    } else {
        return res.status(403).send({message: 'portfolio error' })
    }
}

module.exports = {

    createTransaction(req, res) {
        console.log("create transaction");
        const user = req.currentUser;
        if(user) {
            console.log("user = ")
            console.log(user)
            Portfolio.findOne({
                where: {
                    userId: user.id
                }
            })
            .then(curPortfolio => {
                if (curPortfolio){
                    return Transaction
                    .create({
                        // need to coop makeTransaction method in Portfolio controller
                        sell_type: req.body.sell_type,
                        sell_price: req.body.sell_price,
                        sell_amount: req.body.sell_amount,
                        income_type: req.body.income_type,
                        income_price: req.body.income_price,
                        income_amount: req.body.income_amount
                    })
                    .then(newTransaction => {
                        updateWallet(curPortfolio, req.body.sell_type, -req.body.sell_amount),
                        updateWallet(curPortfolio, req.body.income_type, req.body.income_amount),
                        res.status(200).send(newTransaction)
                    })
                    .catch(err => res.status(400).send(err));
                } else {
                    res.status(403).send({message: 'No portfolio'});
                }
            })
            .catch(err => res.status(400).send(err));
        } else {
            res.status(403).send({message: 'Please log in'});
        }
    },
    
    currentAsset(req, res) {
        const user = req.currentUser;
        if(user) {
            // console.log(Portfolio.findOrCreate);
            console.log('hey')
            Portfolio.findOrCreate({where: {userId: user.id}, defaults: {id: ''}})
            .then(portfolio => {
                
                return Coin.findAll({where: {portfolioId: portfolio.id}})
                .then(coins => res.status(200).send(coins))
                .catch(err => res.status(400).send({
                    error: err,
                }))
            })    
            .catch(err => res.status(404).send({
                error: err
            }))
        } else {
            res.status(404).send({
                error: 'Please login'
            })
        }
    }
}