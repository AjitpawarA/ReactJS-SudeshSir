import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function SpecifinCat() {
  const location = useLocation();
  const data = location.state.item;

  const [datas, setDatas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${data.strCategory}`);
        const result = await response.json();
        setDatas(result.meals);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='spec' style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <section style={{ display: 'flex', width: '100%' }}>
        <div className='right' style={{ width: '50%' }}>
          <img src={data.strCategoryThumb} alt='' style={{ maxWidth:"600px", borderRadius: '8px' }} />
        </div>
        <div className='left' style={{ padding: '20px' }}>
          <h1 style={{ fontSize: '2em', marginBottom: '10px' }}>{data.strCategory}</h1>
          <p style={{ lineHeight: '1.5' }}>{data.strCategoryDescription}</p>
        </div>
      </section>

      <section style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-around', gap: '20px', marginTop: '20px' }}>
        {datas.map((item) => (
          <div key={item.idMeal} style={{ textAlign: 'center', marginBottom: '20px' }}>
            <img src={item.strMealThumb} alt='' style={{ width: '200px', borderRadius: '8px', cursor: 'pointer' }} onClick={() => navigate('/meals', { state: { item } })} />
            <p style={{ marginTop: '10px', fontSize: '1.2em' }}>{item.strMeal}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default SpecifinCat;
