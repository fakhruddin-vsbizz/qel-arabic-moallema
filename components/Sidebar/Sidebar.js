import Link from "next/link";
import { useState } from "react";

const Sidebar = (props) => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: `${props.title1}`, src: `${props.src1}`, link: `${props.link1}` },
    { title: `${props.title2}`, src: `${props.src2}`, link: `${props.link2}` },
    { title: `${props.title3}`, src: `${props.src3}`, link: `${props.link3}` },
    { title: `${props.title4}`, src: `${props.src4}`, link: `${props.link4}` },
  ];
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="https://static.thenounproject.com/png/1195182-200.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple  bg-white
           border-2 rounded-full ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />

        <div className="flex gap-x-4 items-center">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX///8AAAABAQH8/Pzw8PD29vbMzMzW1tZJSUnv7+/4+Pjn5+fq6urk5OQFBQV8fHwZGRmenp6/v7+vr69DQ0Pe3t6EhIRgYGA7OzuNjY3Hx8dZWVmWlpbR0dF2dnZRUVEjIyMwMDAUFBQzMzNtbW2mpqa0tLSIiIhfX18dHR1paWkWFhYoKCguiTLDAAASWklEQVR4nN0diYKiOoxaQEUOOUREBG9Xx///vqVNW0ARUVHB7Jvdp1NKQ9rcCZL0VsCaphiqG1nTxFst/0zT7KU/4+XKS05W5KojRcP4vUt4G2BZNxauP1+hIvQuPm/mvts3dLkzeMJC9X7oWslRYGUS6OUBvuEDlonlqhP9y2uvC0rfsWOPLZ1jlmJZJB58BZiyoYPYdvrat5dfBYR8SmjHjHY9UyDVQ4BOAbIdSxDtcVraqibxrdAqoPxCnU0DM49d+jcn1BUNBXn5UMDSDKbRQmodjmQ5oyhZmowkQLjeJVe5BQTN3JXmObGHUsuQxM4gv9wcdub6uBqc/Mh11L4xlBVNkYdGX3XcyD8NVse1WX4ZmoffxikHyiQ6MwqwbUnXuF558zja9+WqS/v7KJ57qz9+IPkU6aeVPVE+hkMV6KG1JrRiGxNO09g7+bZjiEGYQO6i4mfD2fknbyxOMOGzZL7jQR1+EJNyGDlbWBd99oDe5hS5C0a5uxoLHyAv3Oi0QWIyeFZm7HxRSqZLG7qnNVsSe+woSGW3IQbUn4rASHWtgB7eHmyI9J+/7V7+GtPB7r8jE3Rke5JtFTuTqmN3H+SJEy8pjj02M1qe9t9AMb2jk4y5IAdmn+xHTbAGZbRPuLgBnnMkjPXjOE7+FRaBxgeyN5tYBpnDmI05cwXGfBo1MPMjoM8K+C3nO762JoDO486XAkdyAqJPslV571HxwPDbxA5ueheRCZ044EKS3G3gfEw8qpbQONN7bw5h4/gRIJOGhyBjZQj5i8bvUgbybsMZTPpglzP1nSwAq7MzFR7wNAP3A2RcbMVTTW/tq+826DTVN8kmZZs17r+ZqWI3yJ2MufqJk6Go89yp9/ZvvBWW5JgbOem91u+8VxH2f0LHSU+j8i4yYql/5iIilcLWe+5yA6yjYN0oMN6EorKnyhS9zXqqflLLSO+kTtdCg0LOW07/aAYHnmzQwJY/rEWlJ8QO2ALSMxm9weKYbBlHS+ffLr6h62PCxk2m4sSThieX1ISb4AjtvmWy6buMD8wbFRtYcjZMfzLR+SsEZAtZrBDzv6IgbA5FLLkZAaejL/rAsDSaCi+e6TS3kpmYdW1/28WH7bXwP9oNzanNhKEWOA3N+Qo4AT8wyG5Easi+0CfmahMTvgxEi2NnZvaaz4TC0Dc5BbcNc+inYSK0//XsZbtY9tf8efntiX7pYl/9vUpFLaNg1MCGaAzkKKPiK2cRSzOx423t21w0D1izBXewnxcaAsFU9uyaXF8jsDN5tOppFKmgp3ogGrcPwRRF6q4lSuqToj9V1aiunf5pIQUJ7NjqkPlkJE7d8J3eTgRTFDmXCPrPXD5JsqPcVrA5n5g/IapHW+42iNqbH6FFHMX4UWGNlRnnVH6Lk3kwVSkZHR5aJpb2/OFs26PJlIG+5ZR4kKH2IYL33Ab/KEzmFMVUZhj3B2cgn5kpHbTDmqgCNUDguwkecE/jGJxOaN0Ge/AeONw28OvvUxcxbaG9ciIPNqMHqu2EXwRMb5+2l4vmAU/Zer2agl+m7Cl9LqtPR5afhdGZqpcIWfVE944zp8/EI5uABZMYpltnNFFHQRvtTH4yxjsm+L0aVJEt5jlsuagvgr7lGth9kbFnTyPozh4lwLgjUW3ugO7Bs/i+6/cxoI5isvJBtfON+C1Aek7b5HeqA/KUna6oWu5P2HY+tl9buwT1yNZeLePmVLCYyGpXCnINwJLF1n66vXbqmaGD/j65tsZgzQy+iv2HE7aX950jobBpU/rMbw9yx0DCiiGtBjhj6HhTAx/+A5lido/NAKjMxjjdEgQuZMTW0QvaCYoPGC5vEHF0AgTPXSVhSsQloHhD43QYjV8K5nwXIFyN0LhUd0uV1664Zm6DytTTuEx3C5lKMOueoMgAHwCLMmapWIyEbao3ehxCRsTDNbecrMFDGneZhNRNSIl4vPTzYilijLYL/sMqcJaA4lXYFJ9pGi6ad5uEKSJzmp6NNhdfE52b0tDtoEaaB8yDiii8+H4AJBx/aWFNwpiYD0S5LtBqxMymQ8dJSIh1gDxbNCx8GzGz6aH4TUvBYKXxBV6DB0DZ5HvrahASWoJSRIZrrF20fC9BRHfPeX/ozKSVvMeuBCqqYXSkxW5mlH2lTAHrWOk+CUkOQswMYY4NJsocquUv7gg4gE7OSrKh1Dxoe8y+LkwCBCnb/Augag9ZXfNz3wLZgm0qwon9AdfYfgWgtgAlPCbsHGkG3KbLxn0RICUvM5RYdtjHy6XfB8apkHKoxxRhFFVf1SmAChHurul7VECOf+cYgus3xWoA0iEEfOuEwDsDqgfJtZS1YCgIu+0K7yLIJzh5dF9CagJC/rdX1ShAQQYEKPSEHsN1W1OdnwMbugIlxL1vgDRcNVjr9nXAkrMCiUhM+gVjNL9g3mdgAKtBRKuhiYioTlS0Lo2F0XLnApxZN81MmIc5NLwjzXt8CJzGNa7C8v3IIl0EVobyPVuT/Bprcq1xdEKayF0bxxi25gFL2pwymntpKAScVIwe7uWCYV09DMgxR8t5VNXJTDF2/860u45nhfrtm2t6aHl0iee5bdQUacS3RlnNvxTDFSRp3HfRhHQ5JSGPPEzsAOVgvr+h7A5pjzABm+gWG+hHm/zAU73eX1jaQ+rJRpMUoOb6fvLpP1J/g1CVmTx0SdNL1hARundOy/rmYDU2adNPGEcoNC/N1hrtzmJC1g50G9baqf01sBqFehfTP8f7J2wAvoGKRzGxTJ7jj3iLEHQuqYG0A9EkEQamSO5KNtFiezGOtvyplZstgxBEI0kFDFf3rxlAR6/bGJLCAGiZx/pXQFWRub18eqIutccH9tITc42hOuD1IsUJazUdAYGI1FRY0GsHr2M44uvhD70n+h8UBx7EurNxZsrMLzFc5HvhIBBq8LkO4x/AWDflOSYkg72KoTJAxS3F9xXx6+UHRqy6/2Lk1fmeBNcT8gtn95d7IhzUTGUEyXdL/6tRq1CJIZZi0esgsBwDaxN3u4ETgFD+kDm8TyY6/9v1FTwMD95yubnyZIJ5QH1mnu/oWOnvpiuO8vhe4QHOEJvC/9QQh9U0VPnNN1lnlYnFD9xKUEg/MQTNqYjwaaFzzUlF5ZVnC1a1OJlswvkdlwsRiBSxEw1j0O36Ig09Vm/qhRLXQ9KfHQuIZLbZjuXyjknaDowrvbO85JVXi/yE0ZFl5d9hqBgYDAk2BYBhDcuiAkOWt5lOuOwXvpbcdTGJfnRiuXORlrvjFZIklEtZJ3FE5MbRbGc6wZ2SM7IiiqGXMdXXaHhiR+7qOEFVuXjmIRPEd73P7MlfMSDlwFSU6hAEzsTgMrMy7kAVhkYATyy+ooYxh922pSeNF33eTrxi10M6dllQesH817M7OkofMFxKf4BhDevwNoapFrgEcVWyddycowvrTM/PXCa4CHxCG4G8LEFjBmJjfmfJTFkbS8AfUI0GGlU0ZAHIfyXTLMAWhWQ6gya1iPRIeYYu4I/9Zgs5I2U529x8v7PtdHY8OIY1rJIqDC1QUMqKcUlGoHB7sa3jAa21KwQRzxKZg2gvU1ahyLwynZuAfIFhjaTZKgxjWF2ZU1nzYQNTTxdzmSRwO8NkDREFIML8cjcrw4LEc9FVwsz1MI4h8GRUI6e0CsMt/K6Uv83gDgUMgTIThC6UMhJ+p7/yKkTT6QbbLsWw1yYaAnM552/WBA1bdA4JgiYK6K+aP4df4qXRJYrETiTQIC9tjzyk48AGaFAe/jWs02yf12lspqbB/A3qNO3QS7E0oX4VsiKA5vRSrxW2BSE1TACGagO2xZ7bFk3Zh4OX7MM+SID0CXHLttw+xPXtwx23Dz9k4wu2oINzomjj75iPp5drZ9SYjf+En6Zs5Gt+GkbXHppmHu2G/DTWo762CwcZhTH1+b7ka2O4FPo9TbzrCR/wtU25r+1Bf2kZhqwK/ml/qejVvSkqYg35Sx/0efdKINUuF5ThP+zzhoF83d6lALjweSM+4WM+78fiFmUEzFL/a8ctdkFhHLyg5nStBbwQtxiOubL2UOypjIL5JiHDPT07z8SeznaZFvZs7AlLCxF7ejR+WApZMdxkV4gfJjXjh+fZrf7LV/HDWg1LafyQnN+V9lAM+IjKwcqhQWPA9AVVJAZcsZx8DNjRb1vgmh76LAb8r3YMmOnnJpprD8bxhynQv/L/FrYhC7vXi89ncfzbg8WEj8Xxt6Aj+fhnczESEFrE7v7NfBqa6t0DFviLOVFcN0RHQjee19aNzmV1IZ/X9tO5idTQ/sn8Un3KHHz05P1kjjBjNKBN/mSeNxxD1oTvB3P1Mc/VZwY1r7f4HYloTMEM4fLhB2tmwDg8coPz9+uefq52bci8YpawCX6u/nAFZbL8GP5eDSk0/cq/Tei36oAlZQtOoGnOcP2tWm5jTV1mZt6p+lv1+MwFvMxLv9/qqTC47qnwW30xIMOjd+Fb+6XeJhZrDD0qfp38TH8azYQkh6RArKzHUFl6R5eA5Dhw4V7E5Hf6RCVAwvNlI6yf6fW1Z812r334P9KvTdtCwsP6Wsf+kZ57JGGqVzArMuB9Ew9dJqLmMyzK6PQTvS9DRsLyBqY/0L8UmtDeTJjiPWiX3SViOAYi3Wpi4jJG290+wqxB1PGWx6nzvaBDlroxvRl67no/b+YzrPDed7wn+46ZTUmNvvrrTy6tKcA896Yy1vuvw+9G2LK1/6sc1+H3Wziso3xlOb3U4XeUDOcs6212Z/t19j0zEWQ4Iu9uz4WOvitI3SDuEL0H3Xzf02jKTled6FIX39nFyjjqxkB3PJGzK/sUC9u25nt9xbvzzl0JYxh/zEW6rSkBuvb+Qy3h7xStves69g7LGU/1rx+m79Z7SF1Yq/mQm7BL75INgfenbOMhNaw77wPuJ6yOr06BYQbdeaezMUVCmXmIL3blvdx6zCkxezgHoRPvVlcOvJpm+4TshpLpfHZY+2DGKZg8xS6goTIEFdsJNi/qey4lj3ptoC7UbCeKDEHz6VQnkrbByo3HbUSRvVvVfOHlODjb5y2kIkSzaaDlebeZQJGwm5KGEN8DKs16LyOYgnYw+URRm3xT+oEjaPovCjM5q/f026PdGDGvJ137Lz/4oS+ouG2Ljtqf8jpc069VjlgN8oE/LzRvh6URJoI7vE5BAlp2qIM22IvuJmMyTSmUM1Ew/21HMU6ft4lQ/ar8utO6SOyL6eiLQRssGQmvmG/0LXipArdh8jU1pW/VJH8AtPCPb1C0abRgEktqwhsmpIr4t8TGKEKsdVZqTdToqPMYTLZs9vQYbL9CRqxOmZ5sUsnV+Br0GaBIqBjY8odPI5aG0YYxvBTB2Vuc1coesa4KKU+dqg9Ujr8M6Z2cOWsQQjbR/j35MFjqn5nwJ1HiWu03Grv3dpyx83N5i5wmbiPJtLceu9H6fqiuKaDBIt4DJH7rCcFuwKW/SbS4T2RPKeGA9bChLMB99+FgDVXgdqavvtsRp4QxJyDV/j8Q8pOFXkjO/HKmvvOZaqE/Fm1/Uim/+4yRqlqiQxK564E0jGkezXRGzfFXYsekt7I+ZtvIpNGO6O6ENrHTOI5kwv1W4Efu5u0/6WXQZ/nDgZbJji2rESDzaHZyRLkjj2af1hUn/wo4or+DITWHI+llV8Dv38f9C0TLSAQTgBZZyX7UhPRQDHeAssdH3LWJ80kNKgPsTo8ZIyCG6TF2Jq8dluHE2dJ+CFkLs+O/t4vAG4DJe2VOa+hFRhZEmzkFlqsaYsBjExqqG68Qa27Wg3/Mkzv8DgEZjGjPrh7ExOmSUt56mrkqIyW+k3Ykfq+r7oz0RWRN7biOtnW+n/Kihxa02YCTA0j+eSffdrJ6zVxH+ZLPE8f2pwHwFpOdatoVyArb4aNVJhHvZ9njpgdZ38qbx9F+UXUw5cU+ipPgTLEDsgnyLaNJi4oGsJPw5m0cT/bRXB9Xg5MVuY7aN4ayoimybvTV/S6ypoPVeG2WX4YSp01xEsoIRlGyNAUlhP+xBlDK5a40l4NoJH2VvZQAPVXqbBqY4jQhob2atPHhBVbwJWxL+ALQC6ZUmW9jYiTVtVQ7TqD5YC9DqsfVkzygrJUmxw4dB7EdKlLbyHcBSt+xY4+fQvYONnS5ZXtMopvQ+ZKAF9tOv0W85QbAw9f7oWslopEkxaPYGhS+4QOOibUL+3puhg4ATlnmwvXnq0u2cvF5NffdhaG3OC2pGrCmKSPVjaxT4q2Wf4Ru6c/fcuUlRIKEhqK9O3r+HxU8DAxN8R+DAAAAAElFTkSuQmCC"
            className={`cursor-pointer duration-500 rounded-full ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-100 ${
              !open && "scale-0"
            }`}
          ></h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link href={Menu.link}>
              <li
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
                <img src={Menu.src} className="w-8 border rounded-md" />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
