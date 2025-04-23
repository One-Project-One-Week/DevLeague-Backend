import jwt from 'jsonwebtoken';
const secretAccessKey = process.env.JWT_ACCESS_SECRET || 'secretKey';
const accessExpiration = Number(process.env.JWT_ACCESS_EXPIRATION || 900);

const generateAccessToken = function (payload: any) {
  const exp = accessExpiration * 1000;
  return {
    token: jwt.sign(payload, secretAccessKey, {
      expiresIn: accessExpiration,
    }),
    exp,
  };
};

const secretRefreshKey = process.env.JWT_REFRESH_SECRET || 'secretKey';
const refreshExpiration = Number(process.env.JWT_REFRESH_EXPIRATION || 907200);
const generateRefreshToken = function (payload: any) {
  const exp = refreshExpiration * 1000;
  return {
    token: jwt.sign(payload, secretRefreshKey, {
      expiresIn: refreshExpiration,
    }),
    exp,
  };
};

const verifyToken = function (token: string, type: 'access' | 'refresh') {
  const payload = jwt.verify(
    token,
    type === 'access' ? secretAccessKey : secretRefreshKey
  );
  return payload;
};

export default { generateAccessToken, generateRefreshToken, verifyToken };
