import React, { useMemo } from "react";
import styles from "../styles/calc.module.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Usd, Eur, Rub, Auto, Home } from "../Calculator/CalculatorIcons";

export default function Calculator() {
  const [months, setMonths] = React.useState("none");
  const [currency, setCurrency] = React.useState("usd");
  const [paymentPercent, setPaymentPercent] = React.useState(50);
  const [costValue, setCostValue] = React.useState(10000);
  const initialFee = useMemo(
    () => (costValue || 0) * ((paymentPercent || 0) / 100),
    [costValue, paymentPercent]
  );
  const [calculationResult, setCalculationResult] = React.useState({
    cost: costValue,
    firstPayment: (paymentPercent * costValue) / 100,
    initialFee,
    entrance: costValue * 0.07,
    companyFinancing: costValue - (paymentPercent * costValue) / 100,
    monthly: 0,
  });

  const handleClickCur = (newCurrency) => () => {
    setCostValue(10000);
    setCurrency(newCurrency);
  };

  const handleClickPayment = (newpayment) => () => {
    setPaymentPercent(newpayment);
  };

  const handleChange = (event) => {
    setMonths(event.target.value);
  };

  const currencySym = useMemo(
    () => (currency === "usd" ? "$" : currency === "som" ? "c" : "р"),
    [currency]
  );

  const handleCalculation = () => {
    const firstPayment = (paymentPercent * costValue) / 100;
    const monthly = (
      months !== "none" ? (costValue - firstPayment) / months : 0
    ).toFixed(1);
    setCalculationResult(() => {
      return {
        cost: costValue,
        firstPayment,
        initialFee,
        entrance: (costValue * 0.07).toFixed(0),
        companyFinancing: costValue - firstPayment,
        monthly,
      };
    });
  };

  const currencyClass = (value) =>
    `${styles.currency_button} ${currency == value ? styles.active : ""}`;

  const contributionClass = (value) =>
    `${styles.payment_button} ${paymentPercent == value ? styles.active : ""}`;

  return (
    <div className={styles.main_calc}>
      <div className={styles.calc_title}>
        <h1 className={styles.calc_title_name}>КАЛЬКУЛЯТОР</h1>
        <hr className={styles.calc_title_line} />
      </div>

      <div className={styles.calc_info}>
        <div className={styles.first_section}>
          <div className={styles.filter_name}>
            <button className={styles.but_filter_second}>
              <div className={styles.button_location}>
                <div style={{ paddingTop: "3px" }}>Недвижимости</div>{" "}
                <Home style={{ marginBottom: "3px" }} />
              </div>
            </button>

            <button className={styles.but_filter_second}>
              <div className={styles.button_location}>
                <div style={{ paddingTop: "3px" }}>Автомобиль</div>{" "}
                <Auto style={{ marginBottom: "3px" }} />
              </div>
            </button>
          </div>
          <div style={{ marginTop: "50px" }}>
            <h2 style={{ color: "#00512E" }}>
              Стоимость - {costValue}
              {currencySym}{" "}
            </h2>
            <Box>
              <Slider
                sx={{
                  width: "100%",
                  color: "#FFD600",
                }}
                min={10000}
                max={currency === "usd" ? 200000 : 17000000}
                value={costValue}
                step={100}
                onChange={(e) => setCostValue(e.target.value)}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            </Box>
            <div className={styles.but_group}>
              <ButtonGroup
                className={styles.main_buttons}
                disableElevation
                variant="contained"
              >
                <Button
                  className={currencyClass("rub")}
                  onClick={handleClickCur("rub")}
                >
                  Руб
                </Button>
                <Button
                  className={currencyClass("usd")}
                  onClick={handleClickCur("usd")}
                >
                  USD
                </Button>
                <Button
                  className={currencyClass("som")}
                  onClick={handleClickCur("som")}
                >
                  Сом
                </Button>
              </ButtonGroup>
            </div>
          </div>

          <div>
            <h2 style={{ color: "#00512E" }}>Первоначальный взнос</h2>
            <ButtonGroup
              className={styles.button_group}
              disableElevation
              variant="contained"
            >
              <Button
                className={contributionClass(25)}
                onClick={handleClickPayment(25)}
              >
                25%
              </Button>
              <Button
                className={contributionClass(35)}
                onClick={handleClickPayment(35)}
              >
                35%
              </Button>
              <Button
                className={contributionClass(50)}
                onClick={handleClickPayment(50)}
              >
                50%
              </Button>
              <Button className={styles.last_but}>
                {initialFee}
                {currencySym}
              </Button>
            </ButtonGroup>
          </div>
          <div>
            <h2>Срок договора</h2>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <Select
                  style={{
                    backgroundColor: "#00512E",
                    color: "white",
                    borderRadius: "10px",
                  }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={months}
                  onChange={handleChange}
                >
                  <MenuItem style={{ display: "none" }} value={"none"}>
                    Срок
                  </MenuItem>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((year) => (
                    <MenuItem key={`finance-${year}`} value={year * 12}>
                      {year} год
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <button className={styles.compute} onClick={handleCalculation}>
              Рассчитать
            </button>
          </div>
        </div>

        <div className={styles.second_section}>
          <div>
            <h4 style={{ color: "#848484" }}>Курс Валют</h4>

            <div className={styles.main_cur}>
              <div className={styles.currency}>
                <div style={{ display: "flex" }}>
                  <Usd />
                  <div
                    className={styles.value}
                    style={{
                      fontSize: "20px",
                    }}
                  >
                    <span
                      style={{
                        marginLeft: "10px",
                      }}
                    >
                      USD
                    </span>
                  </div>
                </div>
                <span> 84.90 СОМ</span>
              </div>

              <div className={styles.currency}>
                <div style={{ display: "flex" }}>
                  <Eur />
                  <div className={styles.value}>
                    <span
                      style={{
                        marginLeft: "10px",
                        fontSize: "20px",
                      }}
                    >
                      EUR
                    </span>
                  </div>
                </div>
                <span> 100.27 СОМ</span>
              </div>

              <div className={styles.currency}>
                <div style={{ display: "flex" }}>
                  <Rub />
                  <div className={styles.value}>
                    <span
                      style={{
                        marginLeft: "10px",
                        fontSize: "20px",
                      }}
                    >
                      RUB
                    </span>
                  </div>
                </div>
                <span> 1.14 СОМ</span>
              </div>
            </div>

            <div className={styles.account}>
              <div>
                <h2
                  style={{
                    fontSize: "23px",
                    color: "#FFD600",
                    fontFamily: "NEXT",
                  }}
                >
                  РЕЗУЛЬТАТЫ РАССЧЕТА
                </h2>
              </div>
              <div>
                <div className={styles.point}>
                  <span className={styles.point_name}>
                    Стоимость Недвижимости:
                  </span>
                  <div className={styles.point_price}>
                    <div />
                    {calculationResult.cost}
                    {currencySym}
                  </div>
                </div>
                <div className={styles.point}>
                  <span className={styles.point_name}>
                    Первоначальный взнос:
                  </span>
                  <div className={styles.point_price}>
                    <div />
                    {calculationResult.firstPayment}
                    {currencySym}
                  </div>
                </div>
                <div className={styles.point}>
                  <span className={styles.point_name}>
                    Вступительный взнос:
                  </span>
                  <div className={styles.point_price}>
                    <div />
                    {calculationResult.entrance}
                    {currencySym}
                  </div>
                </div>
                <div className={styles.point}>
                  <span className={styles.point_name}>
                    Сумма финансирования:
                  </span>
                  <div className={styles.point_price}>
                    <div />
                    {calculationResult.companyFinancing}
                    {currencySym}
                  </div>
                </div>
                <div className={styles.point}>
                  <span className={styles.point_name}>Ежемесячный платеж:</span>
                  <div className={styles.point_price}>
                    <div />
                    {calculationResult.monthly}
                    {currencySym}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.last_one} />
    </div>
  );
}
