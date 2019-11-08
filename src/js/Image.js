import React from "react";

export default function Image({ src, alt="", style={}, className="", lazyload=true, ...props }) {
	if (lazyload)
		return <img data-src={src} alt={alt} style={style} className={"lazyload " + className} {...props}/>;
	return <img src={src} alt={alt} style={style} className={className} {...props}/>;
}
