//External Lib Import
const dotenv = require('dotenv')
const path = require('path')
const Joi = require('joi')

//Internal Lib Import
dotenv.config({
  path: path.join(__dirname, '../.env'),
})

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
    PORT: Joi.number().default(6100),
    MONGODB_URL: Joi.string().required().description('Mongo DB url'),
    JWT_SECRET: Joi.string().required().description('JWT secret key'),
    JWT_ACCESS_EXPIRATION_MINUTES: Joi.number().default(30).description('minutes after which access tokens expire'),
    JWT_REFRESH_EXPIRATION_DAYS: Joi.number().default(30).description('days after which refresh tokens expire'),
    JWT_RESET_PASSWORD_EXPIRATION_MINUTES: Joi.number()
      .default(10)
      .description('minutes after which reset password token expires'),
    JWT_VERIFY_EMAIL_EXPIRATION_MINUTES: Joi.number()
      .default(10)
      .description('minutes after which verify email token expires'),
    MASTER_PASSWORD: Joi.string().description('master password'),
    BKASH_CHECKOUT_BASE_URL: Joi.string().description('bkash checkout base url'),
    BKASH_TOKENIZED_BASE_URL: Joi.string().description('bkash tokenized base url'),
    BKASH_TOKENIZED_CALLBACK_BASE_URL: Joi.string().description('bkash tokenized callback base url'),
    BKASH_API_KEY: Joi.string().description('bkash api key'),
    BKASH_API_SECRET: Joi.string().description('bkash api secret'),
    BKASH_USERNAME: Joi.string().description('bkash user name'),
    BKASH_PASSWORD: Joi.string().description('bkash password'),
    CLOUDINARY_URL: Joi.string().description('cloudinary url'),
    CLOUDINARY_NAME: Joi.string().description('cloudinary name'),
    CLOUDINARY_API_KEY: Joi.string().description('cloudinary api key'),
    CLOUDINARY_API_SECRET: Joi.string().description('cloudinary api secret'),
    SMTP_HOST: Joi.string().description('server that will send the emails'),
    SMTP_PORT: Joi.number().description('port to connect to the email server'),
    SMTP_USERNAME: Joi.string().description('username for email server'),
    SMTP_PASSWORD: Joi.string().description('password for email server'),
    EMAIL_FROM: Joi.string().description('the from field in the emails sent by the app'),
  })
  .unknown()

const { value: envVars, error } = envVarsSchema
  .prefs({
    errors: {
      label: 'key',
    },
  })
  .validate(process.env)

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  masterPassword: envVars.MASTER_PASSWORD,
  mongoose: {
    url: envVars.MONGODB_URL + (envVars.NODE_ENV === 'test' ? '-test' : ''),
    options: {
      // useCreateIndex: true,
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      // retryWrites: true,
    },
  },
  apiPath: envVars.API_PATH,
  jwt: {
    secret: envVars.JWT_SECRET,
    accessExpirationMinutes: envVars.JWT_ACCESS_EXPIRATION_MINUTES,
    refreshExpirationDays: envVars.JWT_REFRESH_EXPIRATION_DAYS,
    resetPasswordExpirationMinutes: envVars.JWT_RESET_PASSWORD_EXPIRATION_MINUTES,
    verifyEmailExpirationMinutes: envVars.JWT_VERIFY_EMAIL_EXPIRATION_MINUTES,
  },
  bkash: {
    checkoutBaseUrl: envVars.BKASH_CHECKOUT_BASE_URL,
    tokenizeBaseUrl: envVars.BKASH_TOKENIZED_BASE_URL,
    tokenizeCallbackBaseUrl: envVars.BKASH_TOKENIZED_CALLBACK_BASE_URL,
    apiKey: envVars.BKASH_API_KEY,
    apiSecret: envVars.BKASH_API_SECRET,
    userName: envVars.BKASH_USERNAME,
    password: envVars.BKASH_PASSWORD,
  },
  cloudinary: {
    url: envVars.CLOUDINARY_URL,
    name: envVars.CLOUDINARY_NAME,
    apiKey: envVars.CLOUDINARY_API_KEY,
    apiSecret: envVars.CLOUDINARY_API_SECRET,
  },
  email: {
    smtp: {
      host: envVars.SMTP_HOST,
      port: envVars.SMTP_PORT,
      auth: {
        user: envVars.SMTP_USERNAME,
        pass: envVars.SMTP_PASSWORD,
      },
    },
    from: envVars.EMAIL_FROM,
  },
}
