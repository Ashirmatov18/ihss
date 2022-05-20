import React from "react";
import styles from "../styles/calc.module.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Image from "next/image";
import { Usd, Eur, Rub, Auto, Home } from "../Calculator/CalculatorIcons";
import Line from "../../public/img/Line.png";

export default function Calculator() {
  const [age, setAge] = React.useState("");
  const [currency, setCurrency] = React.useState("usd");
  const [paymentPercent, setPaymentPercent] = React.useState(50);
  const [costValue, setCostValue] = React.useState(1000);
  const [calculationResult, setCalculationResult] = React.useState({
    cost: costValue,
    firstPayment: (paymentPercent * costValue) / 100,
  });

  const handleClickCur = (newCurrency) => () => {
    setCurrency(newCurrency);
  };

  const handleClickPayment = (newpayment) => () => {
    setPaymentPercent(newpayment);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleCalculation = () => {
    setCalculationResult((prevCalculation) => {
      return {
        cost: costValue,
        firstPayment: ((paymentPercent * costValue) / 100).toFixed(0),
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
            <h2 style={{ color: "#00512E" }}>Стоимость - {costValue}$ </h2>
            <Box
              width={580}
              sx={{
                width: 300,
              }}
            >
              <Slider
                sx={{
                  width: 300,
                  color: "#FFD600",
                }}
                min={1000}
                max={10000}
                value={costValue}
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
              <Button className={styles.last_but}>2500$</Button>
            </ButtonGroup>
          </div>
          <div>
            <h2>Срок договора</h2>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel
                  style={{
                    color: "white",
                    fontSize: "18px",
                    border: "0",
                  }}
                  id="demo-simple-select-label"
                >
                  Срок
                </InputLabel>
                <Select
                  style={{
                    backgroundColor: "#00512E",
                    color: "white",
                    borderRadius: "10px",
                  }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>1 год</MenuItem>
                  <MenuItem value={20}>2 года</MenuItem>
                  <MenuItem value={30}>3 года</MenuItem>
                  <MenuItem value={40}>4 года</MenuItem>
                  <MenuItem value={50}>5 лет</MenuItem>
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
                    fontFamily: '"Azeret Mono", monospace',
                  }}
                >
                  РЕЗУЛЬТАТЫ РАССЧЕТА
                </h2>
              </div>
              <div>
                <div className={styles.point}>
                  <span className={styles.point_name}>
                    Стоимость Недвижимости:
                    <Image src={Line} />
                  </span>
                  <span className={styles.point_price}>
                    {calculationResult.cost}$
                  </span>
                </div>
                <div className={styles.point}>
                  <span className={styles.point_name}>
                    Первоначальный взнос:
                    <Image src={Line} />
                  </span>
                  <span className={styles.point_price}>
                    {calculationResult.firstPayment}$
                  </span>
                </div>
                <div className={styles.point}>
                  <span className={styles.point_name}>
                    Вступительный взнос:
                    <img className={styles.img_point} src="/img/Line.png" />
                  </span>
                  <span className={styles.point_price}>1335$</span>
                </div>
                <div className={styles.point}>
                  <span className={styles.point_name}>
                    Сумма финансирования:
                    <Image src={Line} />
                  </span>
                  <span className={styles.point_price}>11335$</span>
                </div>
                <div className={styles.point}>
                  <span className={styles.point_name}>
                    Ежемесячный платеж:
                    <Image src={Line} />
                  </span>
                  <span className={styles.point_price}>1180$</span>
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
