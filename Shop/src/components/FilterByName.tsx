interface Props {
  searchName: (name: string) => void;
}

const FilterByName = ({ searchName }: Props) => {
  return (
    <div className='mb-3 mt-4'>
      <label className='form-label'>Znajdz swój produkt</label>
      <input
        onChange={(e) => searchName(e.target.value)}
        type='text'
        className='form-control'
        placeholder='szukaj'
      />
    </div>
  );
};

export default FilterByName;
