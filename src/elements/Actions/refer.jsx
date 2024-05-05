const ReferralButton = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
    >
      {}
      <Button
        variant="contained"
        color="primary"
        style={{
          backgroundColor: "#3e13eb",
          width: "100%",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "10px",
            }}
          >
            <AccountCircleIcon style={{ fontSize: "2rem" }} />
            <AccountCircleIcon style={{ fontSize: "2rem" }} />
          </div>

          <Typography
            style={{
              fontSize: "0.8rem",
              color: "white",
              textTransform: "none",
            }}
          >
            Unlock referral asks
          </Typography>
        </div>
      </Button>
    </div>
  );
};

export default ReferralButton;
