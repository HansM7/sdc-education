<Swiper
slidesPerView={3}
spaceBetween={30}
freeMode={true}
pagination={{
          clickable: true,
        }}
modules={[FreeMode, Pagination]}
className="mySwiper " >
{techs.map((item, index) => (
<SwiperSlide
className=" "
role="button"
key={index}
onClick={() => handleNumberSelected(item.id)} >
<div
className={`py-4 px-2 min-w-28 rounded-lg ${
                idSelected === item.id ? "bg-blue-400 " : "bg-white"
              } flex justify-center items-center border border-blue-400 transition-all`} >
<span
className={`${
                  idSelected === item.id ? "text-white " : "text-blue-400"
                }`} >
{/_ {item.name} _/}
<img
                  className="w-auto"
                  src="https://cdn-icons-png.flaticon.com/512/2721/2721264.png"
                  alt=""
                />
</span>
</div>
</SwiperSlide>
))}
</Swiper>
