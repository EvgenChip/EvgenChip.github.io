"use strict";

document.addEventListener("DOMContentLoaded", function(event) {
    const sellerInput = document.getElementById('seller')
    const buyerInput = document.getElementById('buyer')
    const siteField = document.getElementById('site')

    const showSiteField = () => {
        siteField.classList.remove('hide');
    }

    const hideSiteField = () => {
        siteField.classList.add('hide');
    }

    sellerInput.addEventListener('click', showSiteField)
    buyerInput.addEventListener('click', hideSiteField)

    const submitButton = document.getElementById('submitButton')

    const onSubmit = (event) => {
        event.preventDefault()
    }

    submitButton.addEventListener('click', onSubmit)
  });