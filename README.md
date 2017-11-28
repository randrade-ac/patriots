# patriots
Visual regression demo

This project runs a simple search on google.com
Using:
node v8.7.0 (npm v5.5.1)
jest
applitools

The tech decision was made in order to learn the tools.

To run it, you need to setup an account on https://www.applitools.com/

See this blog post for more information: http://blog.avenuecode.com/visual-regression-testing-with-applitools-1

git clone the repository
npm install 
make sure you set your applitools key on patriots/tests/google_search.test.js line 25
npm test
