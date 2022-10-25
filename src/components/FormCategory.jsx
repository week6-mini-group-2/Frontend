// import * as React from "react";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";

// import "../css/formCategory.scss";

// const FormCategory = ({ category }) => {
//   const [category, setCategory] = React.useState("");

//   const handleChange = (e) => {
//     setCategory(e.target.value);
//   };
//   console.log("category:", category);

//   return (
//     <FormControl className="formCategory" sx={{ m: 2 }} category={category}>
//       <InputLabel id="demo-select-small">CATEGORIES</InputLabel>
//       <Select
//         labelId="demo-select-small"
//         id="demo-select-small"
//         value={category}
//         label="CATEGORIES"
//         onChange={handleChange}
//       >
//         <MenuItem value={1}>플로깅</MenuItem>
//         <MenuItem value={2}>텀블러 재사용</MenuItem>
//         <MenuItem value={3}>페트병 라벨 제거</MenuItem>
//         <MenuItem value={4}>박스 테이프 제거</MenuItem>
//         <MenuItem value={5}>장바구니 사용</MenuItem>
//         <MenuItem value={6}>미사용 플러그 뽑기</MenuItem>
//       </Select>
//     </FormControl>
//   );
// };

// export default FormCategory;
