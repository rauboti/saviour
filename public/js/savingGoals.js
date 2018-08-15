$(document).ready(function() {
  deviceAdjustment();
  adjustFieldSize();
  $('.input-basic').change(function() {
    $('#txtCurrentBalance').val() !== '' ? $('#txtCurrentBalance').val(spacedNumber(parseFloat($('#txtCurrentBalance').val().replace(/ /g, '')))) : $('#txtCurrentBalance').val('');
    $('#txtGoal').val() !== '' ? $('#txtGoal').val(spacedNumber(parseFloat($('#txtGoal').val().replace(/ /g, '')))) : $('#txtGoal').val('');
    $('#txtCurrentBalance').val() !== '' && $('#txtGoal').val() !== '' ? $('#txtRemainingBalance').val(spacedNumber(parseFloat($('#txtGoal').val().replace(/ /g, '')) - parseFloat($('#txtCurrentBalance').val().replace(/ /g, '')))) : $('#txtRemainingBalance').val('');
    installments();
  });
  $('.input-loan').change(function() {
    $('#txtInterest').val() !== '' ? $('#txtInterest').val(spacedNumber(cleanNumber($('#txtInterest').val()))) : $('#txtInterest').val('');
    $('#txtYears').val() !== '' ? $('#txtYears').val(spacedNumber(cleanNumber($('#txtYears').val()))) : $('#txtYears').val('');
    installments();
  });
});

function adjustFieldSize() {
  var heightMax = 0;
  var widthMax = 0;

  $('.field').each(function() {
    if ($(this).height() > heightMax) { heightMax = $(this).height(); }
  });
  $('.field').height(heightMax);
}

function cleanNumber(v) {
	if (v.indexOf(',') !== -1) {
		v = v.toString().replace(",", ".");
		v = parseFloat(v);
	}
	return v;
}

function installments() {
  if ($('#txtCurrentBalance').val() !== '' && $('#txtGoal').val() !== '' && $('#txtInterest').val() !== '' && $('#txtYears').val() !== '') {
    var interest;
    var years;
    var money;

    $('#txtRemainingBalance').val() == '' || $('#txtRemainingBalance').val() == 'NaN' ? money = 0 : money = cleanNumber($('#txtRemainingBalance').val().replace(/ /g, ''));
    $('#txtInterest').val() == '' || $('#txtInterest').val() == 'NaN' ? interest = 0 : interest = cleanNumber($('#txtInterest').val())/100;
    $('#txtYears').val() == '' ? years = 0 : years = cleanNumber($('#txtYears').val());

    if (interest != 0) {
      var effectiveInterest = (interest/12);
      var payments = (years * 12);
      var monthlyInstallment = money*(effectiveInterest/(1-(Math.pow((1+effectiveInterest), -payments))));
    } else {
      var payments = (years * 12);
      var monthlyInstallment = (money / payments);
    }
    $('#txtMonthly').val(spacedNumber(monthlyInstallment.toFixed(2)));
    $('#txtTotalCost').val(spacedNumber(parseFloat((monthlyInstallment * payments) + parseFloat($('#txtCurrentBalance').val().replace(/ /g, ''))).toFixed(2)));
  } else {
    $('#txtMonthly').val('');
    $('#txtTotalCost').var('');
  }
}

function spacedNumber(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(".");
}
