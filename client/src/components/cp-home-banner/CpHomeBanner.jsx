import styles from './cpHomeBanner.module.scss';
import mockData from './CpHomeBanner_data';

const CpHomeBanner = () => {
  return (
    <section className={styles.section}>
        <div className={styles.left}>
          <h1 className={styles.heading}>{mockData.heading}</h1>
          <h2 className={styles.subHeading}>{mockData.subHeading}</h2>
          <button className={styles.button}>{mockData.buttonText}</button>
        </div>
        <div className={styles.right}>
          <form className={styles.form}>
          <h2 className={styles.heading}>{mockData.form.heading}</h2>
            {mockData.form.fields.map((field) => (
              <div key={field.id} className={styles.formGroup}>
                {field.type === 'textarea' ? (
                  <textarea
                    id={field.id}
                    name={field.id}
                    placeholder={field.placeholder}
                    rows="4"
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    placeholder={field.placeholder}
                  />
                )}
              </div>
            ))}
            <button type="submit" className={styles.submitButton}>
              {mockData.form.submitButtonText}
            </button>
          </form>
        </div>
    </section>
  );
};

export default CpHomeBanner