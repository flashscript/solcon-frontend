import gql from 'graphql-tag';

export const GET_ALL_CUSTOMERS = gql(`query 
{ 
 users(first: 10)
 {
   data
   {
     id
     relp
     name
     lastname
     email
     sex
     dni
     rif
     Ncompanies
     Ntickets
     companies
     {
       id
       name
       rif
       fyc
     }
     address
     {
       id
       label
       address
       country
       state
       city
       province
       zip_code
     }
     emails
     {
       id
       email_alt
     }
     phones
     {
       id
       label
       phone
     }
     currencies
     {
       id
     }
     languages
     {
       id
     }
     products
     {
       id
       name
       description
       price
       created_at
     }
     tickets
     {
       id
       title
       message
       channel
       priority
       status
       pinned
       private
       Ncomments
       created_at
       updated_at
     }
   }
 }
}`);