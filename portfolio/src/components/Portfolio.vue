<template>
  <div id='portfolio-body'>
    <div class='mw9 center ph3-ns'>
      <div class='cf ph2-ns'>
        <PortfolioEntry
          name="Biller Direct"
          :imageUrl="billerDirectImage"
          role="Full-Stack Developer"
          url="https://biller-direct.q2open.io/"
          technology="Vue, Node, Mongo, AWS"
        ></PortfolioEntry>
        <PortfolioEntry
          name="Cardswap"
          :imageUrl="cardswapImage"
          role="Full-Stack Developer"
          url="https://cardswap.q2open.io/"
          technology="Vue, Node, Mongo, AWS"
        ></PortfolioEntry>
      </div>
      <div class='cf ph2-ns'>
        <PortfolioEntry
          name="SXSetList (2018 SXSW Hackathon Winner)"
          :imageUrl="SXSetFinderImage"
          role="Front-End Developer"
          url="https://sxsetfinder.herokuapp.com/"
          technology="React, Python, Mongo, AWS"
        >
        </PortfolioEntry>
        <PortfolioEntry
          name="Errands Now"
          :imageUrl="ErrandsNowImage"
          role="Full-Stack Developer"
          url="https://errandsnow.herokuapp.com/"
          technology="React, Node, Mongo, Heroku"
        ></PortfolioEntry>
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioEntry from './PortfolioEntry'
import billerDirectImage from '../assets/biller-direct.png'
import cardswapImage from '../assets/cardswap.png'
import SXSetFinderImage from '../assets/sxSetFinder.png'
import ErrandsNowImage from '../assets/errands-now.png'

export default {
  name: 'Portfolio',
  components: {
    PortfolioEntry
  },
  data() {
    return {
      billerDirectImage,
      cardswapImage,
      SXSetFinderImage,
      ErrandsNowImage
    }
  }
}
</script>

<style scoped>
#portfolio-body {
  /* background-color: #c091fa; */
  background-color: #9eebcf;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%23000000' fill-opacity='0.15'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
}
</style>