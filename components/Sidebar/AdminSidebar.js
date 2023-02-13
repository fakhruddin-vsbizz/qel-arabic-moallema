import React from 'react'
import Sidebar from './Sidebar'

const TeacherSidebar = () => {
  return (
    <div>
        <Sidebar
        
          title1="Dashboard"
          src1="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///8AAAD7+/t1dXWurq42NjZQUFC0tLTk5OR4eHiioqI9PT26urpiYmL39/eMjIycnJxsbGzY2NjHx8fs7OyEhIQICAhGRkYrKyve3t5PT08ODg7p6ek2refjAAADAElEQVR4nO3d63aaUBBAYfGCiEFBBU3T93/OtmgEG1mTmTMnibi/32UWOyJgIzmTCQAAAAAAAAAAAAAAeGhTE+8RsWR5dUpMit11yK6wjThVeRa5b5/adu3s5TLlJWRIuo/Yl/0K2bW/Du2YQ+CUNNrrOA/csySp2zl18Jx5nMBt8I4l63bQOnzQ9ocGJot20sJhUoTE8EM08Sz0P1Azj73yLEy8TzdBV4krz8LUN3DvslOuhYnvdfHmJXyr8rnCstv4/8J0qRlUFk1/N1xfxJt34Xaj3Ho1WLhSTtrcnNA934l5b+5SvfVssHCmnrXs7Umu3npY1XsF9Vt7FvYvy5V+60Hdp4k37SE6cS7cdO/Fk37rIdOwn5tr4aT3wcvv82Kv0HLs+xbmkQstN0u+hXMKLSgUUKhDoQmFAgp1KDShUEChDoUmFAoo1KHQhEIBhToUmlAooFCHQhMKBRTqUGhCoYBCHQpNKBRQqEOhCYUCCnUoNKFQ8FiF+u/Pen5H+J9l5MJ0NdNaLQYLF4ZpaeTCMK7f1aeQQgpNxl94bMcdvcY5PvlsfDD5g7KdVjpNK/wCJzufXWrOP/RpI//Tz9gJe60S9PT1u+b1Mu3VY9r1yXAnh3q9CHMsu7fNtDwGTlvXB99AAPgCHufS7tFFj3Ppb99Al+th8oOvh073NJcbSa/bXM97mtHfl47/swWfDz+NQiUKKbxbOP7/8x7/7y3G/7snCu+hUIdCEwoFFOpQaEKhgEIdCk0oFFCoQ6EJhQIKdSg0oVBAoQ6FJhQKKNSh0IRCAYU6FJpQKKBQh0ITCgUU6lBoQqGAQp3YhaVh88daK8jy/fgHWO+pt2ZXM841u55g3bXxr503/vUPb9ewbIrvWcMyj7iG5ROsQzr+tWSfYD3g8a/p/ATrcj/B2uoeB2rdzqmD50Q4RM+y0DPq+W9ZHAKnpO4nmZ59UOP709dBT4anztfBD7K8Osm7cU/RPXu9Mz46farymK9fZ2riPQIAAAAAAAAAAAAAADycP6y6R5594gAlAAAAAElFTkSuQmCC"
          link1="/admin/"

          title2="Make Annnouncements"
          src2="data:image/png;base64,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"
          link2="/admin/announcement"

          title3="Students"
          src3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrjoItob1EG7NnRrNnZbvOaKNMrVvjBpm5HQ&usqp=CAU"
          link3="/admin/students/add-student"

          title4="Teachers"
          src4="data:image/png;base64,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  "
          link4="/admin/teachers/add-teacher"
          
        />
    </div>
  )
}

export default TeacherSidebar