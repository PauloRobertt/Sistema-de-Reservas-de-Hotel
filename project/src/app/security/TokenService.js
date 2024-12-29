import 'dotenv/config';
import jwt from 'jsonwebtoken';

class TokenService {
    generateToken(user) {
        const secret = process.env.SECRET;
        const token = jwt.sign({ id: user.id }, secret,);

        return token;
    }

    checkToken(req, res, next) {
        try {
            const secret = process.env.SECRET;
            
            const authHeader = req.headers['authorization'];
            const token = authHeader && authHeader.split(' ')[1];

            if (!token) {
                res.status(404).json({msg: 'Acesso Negado!'});
            }

            jwt.verify(token, secret);

            next();

        } catch (error) {
            res.status(404).json({msg: 'Token Invalido!'});
        }
    }
};

export default new TokenService();
