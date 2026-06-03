// ============================================================
// FIELDS & WAVES — Comprehensive Knowledge Base
// Covers all 5 units from the ECE syllabus
// ============================================================

const KNOWLEDGE_BASE = [

    // ========================================================
    // UNIT I — ELECTROSTATICS (Fundamentals)
    // ========================================================

    {
        id: "coulombs-law",
        unit: 1,
        title: "Coulomb's Law",
        icon: "⚡",
        keywords: [
            "coulomb", "coulombs law", "coulomb's law", "electric force", "force between charges",
            "point charge", "point charges", "electrostatic force", "inverse square law",
            "charge interaction", "q1 q2", "force formula", "coulomb constant",
            "permittivity", "epsilon", "1 by 4 pi epsilon", "force between two charges"
        ],
        shortDesc: "The fundamental law governing the force between two point charges.",
        content: `**Coulomb's Law** states that the electrostatic force between two point charges is directly proportional to the product of the magnitudes of the charges and inversely proportional to the square of the distance between them. The force acts along the line joining the two charges.

Mathematically, the force on charge Q₁ due to charge Q₂ is:
**F₁₂ = (Q₁Q₂) / (4πε₀R²) × â₁₂**

where â₁₂ is the unit vector from Q₂ to Q₁, R is the distance between the charges, and ε₀ = 8.854 × 10⁻¹² F/m is the permittivity of free space.

**Key characteristics:**
• The force is **attractive** if the charges are of opposite sign, and **repulsive** if they are of the same sign.
• It follows the **inverse square law** — doubling the distance reduces the force by a factor of 4.
• The constant 1/(4πε₀) ≈ 9 × 10⁹ N·m²/C².
• In a medium with relative permittivity εᵣ, ε₀ is replaced by ε = ε₀εᵣ.
• The principle of **superposition** applies: the total force on a charge due to multiple charges is the vector sum of individual forces.

**Physical significance:** Coulomb's Law is the foundation of electrostatics. It describes how charges interact at a distance and forms the basis for defining electric field intensity.`,
        formulas: [
            { name: "Coulomb's Law (vector)", expression: "F = (Q₁Q₂)/(4πε₀R²) â_R" },
            { name: "Coulomb's Law (scalar)", expression: "|F| = (Q₁Q₂)/(4πε₀R²)" },
            { name: "Coulomb constant", expression: "k = 1/(4πε₀) ≈ 9 × 10⁹ N·m²/C²" },
            { name: "Permittivity of free space", expression: "ε₀ = 8.854 × 10⁻¹² F/m" }
        ],
        examples: [
            `**Example 1:** Two point charges Q₁ = 2 μC and Q₂ = -3 μC are separated by 0.5 m in free space. Find the force.
**Solution:**
F = (Q₁Q₂)/(4πε₀R²)
F = (9 × 10⁹)(2 × 10⁻⁶)(3 × 10⁻⁶)/(0.5)²
F = (9 × 10⁹)(6 × 10⁻¹²)/(0.25)
F = 54 × 10⁻³ / 0.25 = 0.216 N (attractive)`,
            `**Example 2:** Three charges Q₁ = 1 μC at origin, Q₂ = 2 μC at (1,0,0), Q₃ = -1 μC at (0,1,0). Find the net force on Q₁.
**Solution:** Use superposition.
F₁₂ = (9×10⁹)(1×10⁻⁶)(2×10⁻⁶)/1² × (-âₓ) = -18 × 10⁻³ âₓ N
F₁₃ = (9×10⁹)(1×10⁻⁶)(1×10⁻⁶)/1² × (-âᵧ) = 9 × 10⁻³ âᵧ N (attractive)
F_total = -18âₓ + 9âᵧ mN`
        ],
        keyPoints: [
            "Force follows the inverse square law with distance",
            "Superposition principle allows vector addition of forces from multiple charges",
            "The medium's permittivity affects the force magnitude",
            "Like charges repel, unlike charges attract",
            "Valid only for point charges (or spherically symmetric charge distributions at large distances)"
        ]
    },

    {
        id: "electric-field-intensity",
        unit: 1,
        title: "Electric Field Intensity",
        icon: "🔋",
        keywords: [
            "electric field", "field intensity", "electric field intensity", "E field",
            "field due to charge", "electric field strength", "field vector",
            "force per unit charge", "test charge", "electric field formula",
            "field at a point", "electric field definition"
        ],
        shortDesc: "The force experienced per unit positive test charge at a point in space.",
        content: `**Electric Field Intensity (E)** is defined as the force experienced by a unit positive test charge placed at a point in the electric field. It is a vector quantity measured in Newtons per Coulomb (N/C) or equivalently Volts per meter (V/m).

**E = F/Q_t = Q/(4πε₀R²) â_R**

where Q is the source charge, R is the distance from Q to the point, and â_R is the unit vector pointing away from Q.

**Key concepts:**
• Electric field is a **vector field** — it has both magnitude and direction at every point in space.
• Field lines originate from positive charges and terminate on negative charges.
• The **density of field lines** represents the strength of the electric field.
• Electric field due to multiple charges is found by **superposition**: E_total = ΣEᵢ.
• For continuous charge distributions, integration replaces summation.

**Electric field due to different charge distributions:**
• **Point charge:** E = Q/(4πε₀R²) â_R
• **Line charge (ρ_L):** E = ρ_L/(2πε₀ρ) â_ρ (infinite line along z-axis)
• **Sheet charge (ρ_S):** E = ρ_S/(2ε₀) â_n (infinite sheet)
• **Volume charge (ρ_v):** E = ∫ ρ_v dv'/(4πε₀R²) â_R

The concept of electric field decouples the source charge from the test charge, allowing us to describe the effect of charges on the surrounding space independently.`,
        formulas: [
            { name: "Electric Field (point charge)", expression: "E = Q/(4πε₀R²) â_R" },
            { name: "Electric Field (general)", expression: "E = F/q_t" },
            { name: "Electric Field (line charge)", expression: "E = ρ_L/(2πε₀ρ) â_ρ" },
            { name: "Electric Field (sheet charge)", expression: "E = ρ_S/(2ε₀) â_n" }
        ],
        examples: [
            `**Example:** A point charge Q = 5 nC is located at the origin. Find E at point P(3,4,0).
**Solution:**
R = √(3² + 4²) = 5 m
â_R = (3âₓ + 4âᵧ)/5
E = (9 × 10⁹)(5 × 10⁻⁹)/(25) × (3âₓ + 4âᵧ)/5
E = 1.8 × (0.6âₓ + 0.8âᵧ)
E = 1.08âₓ + 1.44âᵧ V/m
|E| = 1.8 V/m`,
            `**Example:** An infinite line charge ρ_L = 10 nC/m lies along the z-axis. Find E at (3,4,0).
**Solution:**
ρ = √(3² + 4²) = 5 m
â_ρ = (3âₓ + 4âᵧ)/5
E = ρ_L/(2πε₀ρ) â_ρ = (10 × 10⁻⁹)/(2π × 8.854 × 10⁻¹² × 5) × â_ρ
E = 35.97 × (0.6âₓ + 0.8âᵧ) V/m
E = 21.58âₓ + 28.78âᵧ V/m`
        ],
        keyPoints: [
            "E field is force per unit positive test charge",
            "It is a vector field — has magnitude and direction everywhere",
            "Field lines go from + to − charges",
            "Superposition applies for multiple charges",
            "Units: N/C or V/m"
        ]
    },

    {
        id: "electric-flux-density",
        unit: 1,
        title: "Electric Flux Density",
        icon: "🌀",
        keywords: [
            "electric flux", "flux density", "D field", "displacement vector",
            "electric displacement", "electric flux density", "D vector",
            "flux lines", "displacement field", "D equals epsilon E"
        ],
        shortDesc: "Electric flux density D relates to E through the permittivity of the medium.",
        content: `**Electric Flux Density (D)**, also called the electric displacement vector, is defined as:

**D = ε₀E + P = εE**

where P is the polarization vector in dielectrics, and ε = ε₀εᵣ is the permittivity of the medium.

In free space: **D = ε₀E**

**Electric flux (Ψ)** through a surface S is:
**Ψ = ∫∫_S D · dS**

The total electric flux emanating from a closed surface equals the total charge enclosed (this is Gauss's Law in integral form):
**∮ D · dS = Q_enclosed**

**Key points:**
• D is measured in **Coulombs per square meter (C/m²)**.
• Unlike E, D is independent of the medium's permittivity in many problems — it depends only on free charges.
• D is continuous across boundaries for the normal component (when no surface free charge exists): D₁ₙ = D₂ₙ.
• The flux density concept is crucial for applying Gauss's Law and understanding dielectric behavior.
• For a point charge Q at the origin: D = Q/(4πR²) â_R.`,
        formulas: [
            { name: "Electric Flux Density", expression: "D = εE = ε₀εᵣE" },
            { name: "In free space", expression: "D = ε₀E" },
            { name: "Electric Flux", expression: "Ψ = ∮ D · dS = Q_enc" },
            { name: "Point charge", expression: "D = Q/(4πR²) â_R" }
        ],
        examples: [
            `**Example:** Find D at (3,0,0) due to a point charge Q = 5 μC at origin.
**Solution:**
D = Q/(4πR²) â_R = (5 × 10⁻⁶)/(4π × 9) âₓ
D = 44.2 × 10⁻⁹ âₓ = 44.2 nC/m² âₓ`,
            `**Example:** E = 5âₓ V/m in a medium with εᵣ = 4. Find D.
**Solution:**
D = ε₀εᵣE = (8.854 × 10⁻¹²)(4)(5) âₓ
D = 177.08 × 10⁻¹² âₓ = 177.08 pC/m² âₓ`
        ],
        keyPoints: [
            "D = εE relates flux density to field intensity",
            "D depends only on free charges, not bound charges",
            "Units: C/m²",
            "Gauss's Law: total flux through closed surface = enclosed charge",
            "Normal component of D is continuous across charge-free boundaries"
        ]
    },

    {
        id: "gauss-law",
        unit: 1,
        title: "Gauss's Law and Applications",
        icon: "🔮",
        keywords: [
            "gauss law", "gauss's law", "gausses law", "gaussian surface",
            "flux enclosed", "total flux", "closed surface integral",
            "gauss theorem", "charge enclosed", "electric flux gauss",
            "applications of gauss law", "divergence", "gauss law applications",
            "gauss law for sphere", "gauss law for cylinder", "gauss law point charge"
        ],
        shortDesc: "The total electric flux through any closed surface equals the total enclosed charge.",
        content: `**Gauss's Law** is one of the four Maxwell's equations and states that the total electric flux through any closed surface (Gaussian surface) is equal to the total charge enclosed by that surface.

**Integral form:** ∮ D · dS = Q_enclosed
**Differential (point) form:** ∇ · D = ρᵥ

where ρᵥ is the volume charge density.

**Choosing a Gaussian Surface:** The key to applying Gauss's Law effectively is selecting a surface where:
1. D is **constant** over the surface (or parts of it)
2. D is either **parallel** or **perpendicular** to the surface
3. The surface exploits the **symmetry** of the charge distribution

**Applications of Gauss's Law:**

**1. Point Charge:**
Spherical Gaussian surface of radius r:
∮ D · dS = D(4πr²) = Q → D = Q/(4πr²) â_r

**2. Infinite Line Charge (ρ_L):**
Cylindrical Gaussian surface:
D(2πρL) = ρ_L × L → D = ρ_L/(2πρ) â_ρ

**3. Infinite Sheet Charge (ρ_S):**
Pillbox Gaussian surface:
2D(ΔS) = ρ_S(ΔS) → D = ρ_S/2 â_n

**4. Uniformly Charged Sphere (ρᵥ, radius a):**
For r > a: D = Q_total/(4πr²) â_r
For r < a: D = ρᵥr/3 â_r

Gauss's Law is most useful when the charge distribution has **spherical, cylindrical, or planar symmetry**.`,
        formulas: [
            { name: "Gauss's Law (integral)", expression: "∮ D · dS = Q_enclosed" },
            { name: "Gauss's Law (differential)", expression: "∇ · D = ρᵥ" },
            { name: "Point charge field", expression: "D = Q/(4πr²) â_r" },
            { name: "Line charge field", expression: "D = ρ_L/(2πρ) â_ρ" },
            { name: "Sheet charge field", expression: "D = ρ_S/2 â_n" }
        ],
        examples: [
            `**Example:** A sphere of radius 5 cm has uniform ρᵥ = 2 nC/m³. Find D at r = 3 cm and r = 10 cm.
**Solution:**
Total Q = ρᵥ × (4/3)π(0.05)³ = 1.047 × 10⁻¹² C

At r = 3 cm (inside): D = ρᵥr/3 = (2×10⁻⁹)(0.03)/3 = 20 pC/m²
At r = 10 cm (outside): D = Q/(4πr²) = 1.047×10⁻¹²/(4π(0.1)²) = 8.33 pC/m²`,
            `**Example:** An infinite line charge ρ_L = 25 nC/m. Find D and E at ρ = 2 m.
**Solution:**
D = ρ_L/(2πρ) = 25×10⁻⁹/(2π×2) = 1.99 nC/m²
E = D/ε₀ = 1.99×10⁻⁹/8.854×10⁻¹² = 224.7 V/m`
        ],
        keyPoints: [
            "Choose Gaussian surface matching the charge symmetry",
            "Works best for spherical, cylindrical, and planar symmetry",
            "Integral form: ∮D·dS = Q_enc; Differential form: ∇·D = ρᵥ",
            "Relates the divergence of D to the volume charge density",
            "Electric flux is independent of the shape of the closed surface"
        ]
    },

    {
        id: "divergence-theorem",
        unit: 1,
        title: "Divergence Theorem",
        icon: "📐",
        keywords: [
            "divergence theorem", "gauss divergence theorem", "divergence",
            "del dot", "nabla dot", "volume integral", "surface integral",
            "divergence of D", "divergence of E", "div theorem",
            "closed surface to volume", "flux to divergence"
        ],
        shortDesc: "Converts a closed surface integral into a volume integral over the enclosed region.",
        content: `The **Divergence Theorem** (also called Gauss's Divergence Theorem) is a fundamental mathematical identity that converts a closed surface integral into a volume integral:

**∮_S A · dS = ∫∫∫_V (∇ · A) dV**

where A is any vector field, S is the closed surface, and V is the volume enclosed by S.

**Physical meaning:** The total flux of a vector field through a closed surface equals the total divergence (source strength) within the volume.

**Divergence of a vector field** in Cartesian coordinates:
∇ · A = ∂Aₓ/∂x + ∂Aᵧ/∂y + ∂A_z/∂z

In cylindrical coordinates:
∇ · A = (1/ρ)∂(ρAρ)/∂ρ + (1/ρ)∂Aφ/∂φ + ∂A_z/∂z

In spherical coordinates:
∇ · A = (1/r²)∂(r²Aᵣ)/∂r + (1/r sinθ)∂(sinθ Aθ)/∂θ + (1/r sinθ)∂Aφ/∂φ

**Application to Gauss's Law:**
∮ D · dS = Q_enc = ∫∫∫ ρᵥ dV
By divergence theorem: ∫∫∫ (∇ · D) dV = ∫∫∫ ρᵥ dV
Therefore: **∇ · D = ρᵥ** (This is Gauss's Law in point/differential form)

The divergence theorem is essential for converting between integral and differential forms of Maxwell's equations.`,
        formulas: [
            { name: "Divergence Theorem", expression: "∮_S A · dS = ∫∫∫_V (∇ · A) dV" },
            { name: "Divergence (Cartesian)", expression: "∇·A = ∂Aₓ/∂x + ∂Aᵧ/∂y + ∂A_z/∂z" },
            { name: "Divergence (Cylindrical)", expression: "∇·A = (1/ρ)∂(ρAρ)/∂ρ + (1/ρ)∂Aφ/∂φ + ∂Az/∂z" },
            { name: "Divergence (Spherical)", expression: "∇·A = (1/r²)∂(r²Ar)/∂r + (1/rsinθ)∂(sinθAθ)/∂θ + (1/rsinθ)∂Aφ/∂φ" }
        ],
        examples: [
            `**Example:** Verify the divergence theorem for D = 2ρz âρ + 3z sinφ âφ C/m² over a cylinder ρ=2, 0≤z≤3.
**Solution:**
∇·D = (1/ρ)∂(ρDρ)/∂ρ + (1/ρ)∂Dφ/∂φ + ∂Dz/∂z
= (1/ρ)∂(2ρ²z)/∂ρ + (1/ρ)∂(3z sinφ)/∂φ + 0
= 4z + (3z cosφ)/ρ
Volume integral = ∫₀²π ∫₀² ∫₀³ [4z + (3z cosφ)/ρ] ρ dρ dφ dz
The cosφ term integrates to 0 over full 2π.
= ∫₀²π ∫₀² ∫₀³ 4zρ dz dρ dφ = 2π × [ρ²/2]₀² × [z²/2]₀³ × 4 = 2π × 2 × 4.5 × 4 = 72π`
        ],
        keyPoints: [
            "Converts closed surface integrals to volume integrals",
            "Divergence measures the 'source strength' of a vector field",
            "Connects integral and differential forms of Gauss's Law",
            "Divergence = 0 means no net flux (incompressible/solenoidal field)",
            "Works in all coordinate systems (Cartesian, cylindrical, spherical)"
        ]
    },

    {
        id: "energy-moving-charge",
        unit: 1,
        title: "Energy in Moving a Charge / Work Done",
        icon: "⚙️",
        keywords: [
            "work done", "energy moving charge", "work done in electric field",
            "moving charge", "work done moving charge", "energy spent",
            "charge movement", "work in field", "force times distance",
            "line integral", "work integral", "energy to move charge"
        ],
        shortDesc: "Work done in moving a charge against the electric field from one point to another.",
        content: `The **work done** in moving a charge Q from point A to point B in an electric field E is:

**W = -Q ∫_A^B E · dl**

The negative sign indicates that work is done **against** the electric field. If the charge moves in the direction of E, the field does work on the charge (W is negative for external agent).

**Key concepts:**
• The work done depends only on the **initial and final positions**, not on the path taken — because the electrostatic field is **conservative**.
• This path-independence leads to the concept of **potential** and **potential difference**.
• ∮ E · dl = 0 for any closed path in a static electric field (conservative field property).
• The energy stored in the field configuration equals the work done in assembling the charge distribution.

**Work done in assembling a system of point charges:**
For N point charges: W = ½ Σᵢ Σⱼ (QᵢQⱼ)/(4πε₀Rᵢⱼ), where j ≠ i

This is equivalent to: W = ½ Σ QᵢVᵢ, where Vᵢ is the potential at the location of Qᵢ due to all other charges.

The concept of work and energy is fundamental to understanding potential, potential difference, and energy density in electric fields.`,
        formulas: [
            { name: "Work done (charge in field)", expression: "W = -Q ∫ E · dl" },
            { name: "Conservative field", expression: "∮ E · dl = 0" },
            { name: "Assembly energy (N charges)", expression: "W = ½ Σ QᵢVᵢ" },
            { name: "Work (two charges)", expression: "W = Q₁Q₂/(4πε₀R₁₂)" }
        ],
        examples: [
            `**Example:** Find work done in moving Q = 5 μC from A(1,0,0) to B(3,0,0) in field E = 2x âₓ V/m.
**Solution:**
W = -Q ∫_A^B E · dl = -(5×10⁻⁶) ∫₁³ 2x dx
= -(5×10⁻⁶)[x²]₁³ = -(5×10⁻⁶)(9-1) = -40 μJ
The negative sign means the field does 40 μJ of work on the charge.`,
            `**Example:** Find energy to assemble charges Q₁=1nC at (0,0,0), Q₂=2nC at (1,0,0), Q₃=-1nC at (0,1,0).
**Solution:**
W = (1/4πε₀)[Q₁Q₂/R₁₂ + Q₁Q₃/R₁₃ + Q₂Q₃/R₂₃]
= 9×10⁹[(2×10⁻¹⁸)/1 + (-1×10⁻¹⁸)/1 + (-2×10⁻¹⁸)/√2]
= 9×10⁹[2-1-1.414]×10⁻¹⁸ = -3.73 nJ`
        ],
        keyPoints: [
            "Work done is path-independent (conservative field)",
            "W = -Q∫E·dl (work done by external agent against field)",
            "Closed loop integral of E is zero: ∮E·dl = 0",
            "Energy to assemble charges: W = ½ΣQᵢVᵢ",
            "Leads directly to the concept of electric potential"
        ]
    },

    {
        id: "potential-potential-difference",
        unit: 1,
        title: "Potential and Potential Difference",
        icon: "🔌",
        keywords: [
            "potential", "electric potential", "voltage", "potential difference",
            "potential at a point", "V", "volt", "potential due to charge",
            "scalar potential", "absolute potential", "potential energy",
            "work per unit charge", "reference potential", "ground potential"
        ],
        shortDesc: "Electric potential is the work done per unit charge in bringing a charge from infinity.",
        content: `**Electric Potential (V)** at a point is defined as the work done per unit positive charge in bringing a test charge from infinity (reference) to that point:

**V = -∫_∞^P E · dl = W/Q**

**Potential Difference** between two points A and B:
**V_AB = V_A - V_B = -∫_B^A E · dl**

**Potential due to various charge distributions:**
• **Point charge:** V = Q/(4πε₀r)
• **Line charge:** V = -(ρ_L/2πε₀) ln(ρ) + C
• **Multiple charges:** V = Σ Qᵢ/(4πε₀Rᵢ)
• **Continuous distribution:** V = ∫ ρᵥdv'/(4πε₀R)

**Key properties:**
• Potential is a **scalar** quantity — much easier to work with than vector E.
• **Equipotential surfaces** are surfaces where V is constant; E is always perpendicular to these surfaces.
• The potential at infinity is taken as the **reference** (zero potential).
• Potential is measured in **Volts (V)** = Joules/Coulomb.
• If V is known, E can be found: **E = -∇V** (negative gradient of V).
• Potential obeys the **superposition principle** — total V is the algebraic sum of individual potentials.`,
        formulas: [
            { name: "Electric Potential (point charge)", expression: "V = Q/(4πε₀r)" },
            { name: "Potential difference", expression: "V_AB = -∫_B^A E · dl" },
            { name: "E from V", expression: "E = -∇V" },
            { name: "Potential (multiple charges)", expression: "V = Σ Qᵢ/(4πε₀Rᵢ)" }
        ],
        examples: [
            `**Example:** Find V at P(1,2,3) due to Q = 10 nC at origin.
**Solution:**
R = √(1+4+9) = √14 = 3.742 m
V = Q/(4πε₀R) = (9×10⁹)(10×10⁻⁹)/3.742 = 24.05 V`,
            `**Example:** Given E = -6y âₓ + 6x âᵧ V/m, find V_AB where A(2,1,0) and B(0,0,0).
**Solution:**
V_AB = -∫_B^A E·dl
Along path B→(2,0,0)→A:
V₁ = -∫₀² (-6·0)dx = 0
V₂ = -∫₀¹ (6·2)dy = -12 V
V_AB = -12 V`
        ],
        keyPoints: [
            "V is a scalar — easier to compute than vector E",
            "E = -∇V (gradient relationship)",
            "Potential is path-independent (conservative field)",
            "Equipotential surfaces are ⊥ to E field lines",
            "Reference: V = 0 at infinity"
        ]
    },

    {
        id: "potential-gradient",
        unit: 1,
        title: "Potential Gradient",
        icon: "📈",
        keywords: [
            "potential gradient", "gradient", "grad V", "nabla V", "del V",
            "gradient of potential", "E from potential", "E equals negative grad V",
            "gradient operator", "rate of change of potential", "steepest descent"
        ],
        shortDesc: "The electric field is the negative gradient of the electric potential.",
        content: `The **Potential Gradient** establishes the fundamental relationship between electric potential V and electric field intensity E:

**E = -∇V**

The gradient operator (∇) in different coordinate systems:

**Cartesian:** ∇V = (∂V/∂x)âₓ + (∂V/∂y)âᵧ + (∂V/∂z)â_z

**Cylindrical:** ∇V = (∂V/∂ρ)â_ρ + (1/ρ)(∂V/∂φ)â_φ + (∂V/∂z)â_z

**Spherical:** ∇V = (∂V/∂r)â_r + (1/r)(∂V/∂θ)â_θ + (1/r sinθ)(∂V/∂φ)â_φ

**Physical meaning:**
• The gradient points in the direction of **maximum rate of increase** of V.
• Since E = -∇V, the electric field points in the direction of **maximum rate of decrease** of potential.
• The magnitude of the gradient gives the **rate of change** per unit distance.
• E is always perpendicular to equipotential surfaces.

**Why the negative sign?** Electric field points from higher to lower potential (like a ball rolling downhill). The gradient points uphill, so E = -∇V points downhill — from + to −.`,
        formulas: [
            { name: "Potential Gradient", expression: "E = -∇V" },
            { name: "Gradient (Cartesian)", expression: "∇V = ∂V/∂x âₓ + ∂V/∂y âᵧ + ∂V/∂z â_z" },
            { name: "Gradient (Cylindrical)", expression: "∇V = ∂V/∂ρ â_ρ + (1/ρ)∂V/∂φ â_φ + ∂V/∂z â_z" },
            { name: "Gradient (Spherical)", expression: "∇V = ∂V/∂r â_r + (1/r)∂V/∂θ â_θ + (1/rsinθ)∂V/∂φ â_φ" }
        ],
        examples: [
            `**Example:** Given V = x² + y² + z², find E.
**Solution:**
E = -∇V = -(2x âₓ + 2y âᵧ + 2z â_z) V/m
At point (1,2,3): E = -(2âₓ + 4âᵧ + 6â_z) V/m
|E| = √(4+16+36) = √56 = 7.48 V/m`,
            `**Example:** V = 10/r² (spherical). Find E.
**Solution:**
E = -∇V = -∂V/∂r â_r = -(-20/r³) â_r = 20/r³ â_r V/m
The field is radially outward, inversely proportional to r³.`
        ],
        keyPoints: [
            "E = -∇V is the key relationship between field and potential",
            "Gradient points in direction of maximum increase of V",
            "E points from high to low potential",
            "Different forms for Cartesian, cylindrical, and spherical coordinates",
            "Equipotential surfaces are always perpendicular to E"
        ]
    },

    {
        id: "energy-density",
        unit: 1,
        title: "Energy Density in Electric Field",
        icon: "💡",
        keywords: [
            "energy density", "electrostatic energy", "energy stored",
            "energy in electric field", "field energy", "energy per unit volume",
            "half epsilon E squared", "energy density formula",
            "stored energy", "electrostatic energy density"
        ],
        shortDesc: "The energy stored per unit volume in an electric field.",
        content: `**Electrostatic Energy Density** is the energy stored per unit volume in an electric field:

**w_E = ½ ε E² = ½ D · E = D²/(2ε)  [J/m³]**

The total energy stored in a volume V is:
**W_E = ∫∫∫_V ½ ε E² dV = ∫∫∫_V ½ D · E dV**

**Derivation approach:** Consider assembling a charge distribution from infinity. The work done in bringing each infinitesimal charge element against the existing field is stored as potential energy in the field.

**Physical significance:**
• Energy is stored in the **electric field itself**, not in the charges.
• This concept is fundamental to understanding capacitors, where energy is stored in the dielectric between the plates.
• The energy density is proportional to the **square** of the field intensity.
• For a parallel plate capacitor: W = ½ CV² = ½ QV = Q²/(2C).

**Energy stored in a capacitor:**
W = ½ CV² = ½ εE²(Ad) = ½ε₀εᵣE² × (volume)

This confirms that w_E = ½εE² is the energy density.

**For a system of point charges:**
W = ½ Σ QᵢVᵢ where Vᵢ is the potential at Qᵢ due to all other charges.`,
        formulas: [
            { name: "Energy Density", expression: "w_E = ½εE² = ½D·E [J/m³]" },
            { name: "Total Energy", expression: "W_E = ∫∫∫ ½εE² dV" },
            { name: "Capacitor Energy", expression: "W = ½CV² = ½QV = Q²/(2C)" },
            { name: "Assembly Energy", expression: "W = ½ΣQᵢVᵢ" }
        ],
        examples: [
            `**Example:** Find energy stored in the field between concentric spheres (a=5cm, b=10cm) if V = 100V.
**Solution:**
C = 4πε₀ab/(b-a) = 4π(8.854×10⁻¹²)(0.05)(0.1)/(0.05) = 11.13 pF
W = ½CV² = ½(11.13×10⁻¹²)(100)² = 55.63 nJ`,
            `**Example:** E = 5 kV/m in a region of volume 0.1 m³ in free space. Find stored energy.
**Solution:**
W = ½ε₀E²V = ½(8.854×10⁻¹²)(5000)²(0.1)
W = ½(8.854×10⁻¹²)(25×10⁶)(0.1) = 11.07 μJ`
        ],
        keyPoints: [
            "Energy is stored in the field, not in the charges",
            "Energy density w_E = ½εE² (proportional to E²)",
            "Total energy: integrate density over all space",
            "For capacitors: W = ½CV²",
            "Units: J/m³ for density, J for total energy"
        ]
    },

    // ========================================================
    // UNIT II — ELECTROSTATICS (Advanced)
    // ========================================================

    {
        id: "electric-dipole",
        unit: 2,
        title: "Electric Field Due to Dipole",
        icon: "🧲",
        keywords: [
            "dipole", "electric dipole", "dipole field", "dipole moment",
            "electric dipole moment", "p equals Qd", "dipole potential",
            "dipole far field", "two equal opposite charges", "dipole pair",
            "dipole field pattern", "torque on dipole"
        ],
        shortDesc: "An electric dipole consists of two equal and opposite charges separated by a small distance.",
        content: `An **Electric Dipole** consists of two equal and opposite point charges (+Q and -Q) separated by a small distance d. The dipole moment is:

**p = Qd  [C·m]**

where d is the vector from -Q to +Q.

**Potential due to a dipole** (at distance r >> d):
**V = p cosθ / (4πε₀r²)**

**Electric field of a dipole** (in spherical coordinates, for r >> d):
**E_r = 2p cosθ / (4πε₀r³)**
**E_θ = p sinθ / (4πε₀r³)**

**Key characteristics:**
• The field falls off as **1/r³** (faster than a point charge's 1/r²).
• The potential falls off as **1/r²** (faster than a point charge's 1/r).
• At θ = 0° (along the dipole axis): E is maximum, pointing along p.
• At θ = 90° (perpendicular bisector): V = 0, E is antiparallel to p.

**Torque on a dipole in a uniform field E:**
**T = p × E**

**Potential energy of a dipole in uniform field:**
**U = -p · E**

Electric dipoles are fundamental in understanding **polarization** of dielectrics, molecular interactions, and antenna theory.`,
        formulas: [
            { name: "Dipole Moment", expression: "p = Qd" },
            { name: "Dipole Potential", expression: "V = p cosθ/(4πε₀r²)" },
            { name: "Dipole E_r", expression: "E_r = 2p cosθ/(4πε₀r³)" },
            { name: "Dipole E_θ", expression: "E_θ = p sinθ/(4πε₀r³)" },
            { name: "Torque", expression: "T = p × E" },
            { name: "Potential Energy", expression: "U = -p · E" }
        ],
        examples: [
            `**Example:** A dipole with p = 5 nC·m is at the origin along z-axis. Find V and E at (0,0,3).
**Solution:**
At (0,0,3): r = 3, θ = 0°
V = p cosθ/(4πε₀r²) = (5×10⁻⁹)(1)/(4π×8.854×10⁻¹²×9) = 4.99 V
E_r = 2p/(4πε₀r³) = 2×4.99/3 = 3.33 V/m
E_θ = 0 (since sinθ = 0)`,
            `**Example:** A dipole p = 2 nC·m is in a uniform field E = 10⁴ âₓ V/m. Find max torque.
**Solution:**
|T| = |p × E| = pE sinθ → max when θ = 90°
T_max = pE = (2×10⁻⁹)(10⁴) = 20 μN·m`
        ],
        keyPoints: [
            "Dipole field falls off as 1/r³, potential as 1/r²",
            "Dipole moment p = Qd (from − to + charge)",
            "Torque on dipole in uniform field: T = p × E",
            "V = 0 on the perpendicular bisector plane",
            "Fundamental to understanding polarization and dielectrics"
        ]
    },

    {
        id: "conductors-dielectrics",
        unit: 2,
        title: "Properties of Conductors and Dielectrics",
        icon: "🔩",
        keywords: [
            "conductor", "dielectric", "conductors", "dielectrics",
            "properties of conductor", "properties of dielectric", "insulator",
            "free charges", "bound charges", "polarization", "permittivity",
            "relative permittivity", "dielectric constant", "conductor in field",
            "E inside conductor", "induced charges", "perfect conductor",
            "dielectric polarization", "susceptibility"
        ],
        shortDesc: "Conductors have free charges; dielectrics have bound charges that polarize in an electric field.",
        content: `**Conductors:**
A conductor has free electrons that move under the influence of an electric field. Key properties:
• **E = 0** inside a perfect conductor (charges redistribute until internal field cancels).
• **V = constant** throughout the conductor (equipotential body).
• Any net charge resides on the **surface** of the conductor.
• The electric field at the surface is **normal** to the surface: E = ρ_s/ε₀ â_n.
• The surface of a conductor is an **equipotential surface**.

**Dielectrics:**
Dielectrics (insulators) have no free charges but contain bound charges that polarize under an applied field.
• **Polarization P** = χ_e ε₀ E, where χ_e is the electric susceptibility.
• **D = ε₀E + P = ε₀(1 + χ_e)E = ε₀εᵣE = εE**
• εᵣ = 1 + χ_e is the **relative permittivity** (dielectric constant).
• Bound surface charge density: ρ_ps = P · â_n
• Bound volume charge density: ρ_pv = -∇ · P

**Comparison:**
| Property | Conductor | Dielectric |
|----------|-----------|------------|
| Free charges | Yes | No |
| E inside | 0 | Non-zero |
| Polarization | N/A | P = χ_eε₀E |
| σ (conductivity) | Very high (∞) | Very low (~0) |`,
        formulas: [
            { name: "E inside conductor", expression: "E = 0 (static)" },
            { name: "Surface charge field", expression: "E = ρ_s/ε₀ â_n" },
            { name: "Polarization", expression: "P = χ_e ε₀ E" },
            { name: "D in dielectric", expression: "D = ε₀εᵣE = εE" },
            { name: "Relative permittivity", expression: "εᵣ = 1 + χ_e" }
        ],
        examples: [
            `**Example:** A dielectric with εᵣ = 4 is placed in E = 100 V/m. Find D, P, and χ_e.
**Solution:**
χ_e = εᵣ - 1 = 3
D = ε₀εᵣE = (8.854×10⁻¹²)(4)(100) = 3.54 nC/m²
P = χ_eε₀E = (3)(8.854×10⁻¹²)(100) = 2.66 nC/m²`,
            `**Example:** A conducting sphere of radius 10 cm has charge Q = 1 μC. Find E at r = 5 cm and r = 20 cm.
**Solution:**
At r = 5 cm (inside): E = 0
At r = 20 cm (outside): E = Q/(4πε₀r²) = (9×10⁹)(10⁻⁶)/(0.04) = 225 kV/m`
        ],
        keyPoints: [
            "E = 0 inside a conductor under static conditions",
            "Conductor surface is equipotential",
            "Dielectrics polarize: P = χ_eε₀E",
            "D = ε₀εᵣE in linear, isotropic dielectrics",
            "εᵣ = relative permittivity (dielectric constant)"
        ]
    },

    {
        id: "continuity-equation",
        unit: 2,
        title: "Continuity Equation for Current",
        icon: "🔄",
        keywords: [
            "continuity equation", "current continuity", "conservation of charge",
            "charge conservation", "current density", "J", "current density vector",
            "divergence of J", "conduction current", "ohms law point form",
            "current flow", "charge flow", "continuity"
        ],
        shortDesc: "The continuity equation expresses conservation of charge in electromagnetic theory.",
        content: `The **Continuity Equation** is a mathematical expression of the law of conservation of charge. It states that charge can neither be created nor destroyed — any decrease in charge within a region must be accompanied by a current flowing out of that region.

**∇ · J = -∂ρᵥ/∂t**

where J is the current density (A/m²) and ρᵥ is the volume charge density (C/m³).

**Integral form:**
**∮ J · dS = -dQ/dt = -∂/∂t ∫∫∫ ρᵥ dV**

**For steady (DC) currents:** ∂ρᵥ/∂t = 0, so:
**∇ · J = 0** (divergence-free, or solenoidal)

This means: in steady state, current flowing into any closed surface equals current flowing out.

**Related concepts:**
• **Current density:** J = σE (Ohm's law in point form)
• **Conductivity** σ is measured in S/m (Siemens per meter).
• **Current:** I = ∫∫ J · dS
• **Resistance:** R = L/(σA) = ρL/A where ρ = 1/σ is resistivity.

The continuity equation is critical because it led Maxwell to introduce the **displacement current** term ∂D/∂t, completing Ampere's Law for time-varying fields.`,
        formulas: [
            { name: "Continuity Equation (point form)", expression: "∇ · J = -∂ρᵥ/∂t" },
            { name: "Steady state", expression: "∇ · J = 0" },
            { name: "Ohm's Law (point form)", expression: "J = σE" },
            { name: "Current", expression: "I = ∫∫ J · dS" },
            { name: "Resistance", expression: "R = L/(σA)" }
        ],
        examples: [
            `**Example:** J = 10e⁻²ᵗ â_r A/m² in spherical coordinates. Find ρᵥ.
**Solution:**
∇·J = (1/r²)∂(r²Jr)/∂r = (1/r²)∂(10r²e⁻²ᵗ)/∂r = (20r e⁻²ᵗ)/r² = 20e⁻²ᵗ/r
From continuity: ∂ρᵥ/∂t = -∇·J = -20e⁻²ᵗ/r
ρᵥ = ∫(-20e⁻²ᵗ/r)dt = (10e⁻²ᵗ)/r C/m³`,
            `**Example:** A wire of σ = 5.8×10⁷ S/m, length 2m, area 1 mm². Find R and current if E = 0.5 V/m.
**Solution:**
R = L/(σA) = 2/(5.8×10⁷ × 10⁻⁶) = 0.0345 Ω
J = σE = (5.8×10⁷)(0.5) = 2.9×10⁷ A/m²
I = JA = (2.9×10⁷)(10⁻⁶) = 29 A`
        ],
        keyPoints: [
            "Charge is always conserved: ∇·J = -∂ρᵥ/∂t",
            "For steady currents: ∇·J = 0",
            "Ohm's law point form: J = σE",
            "Led Maxwell to introduce displacement current",
            "Integral form: net current out = rate of decrease of enclosed charge"
        ]
    },

    {
        id: "boundary-conditions",
        unit: 2,
        title: "Boundary Conditions (Electrostatic)",
        icon: "🚧",
        keywords: [
            "boundary condition", "boundary conditions", "interface",
            "tangential component", "normal component", "dielectric boundary",
            "conductor boundary", "E tangential", "D normal", "interface conditions",
            "boundary between dielectrics", "refraction of field lines",
            "electrostatic boundary"
        ],
        shortDesc: "Rules governing the behavior of E and D at the interface between different media.",
        content: `**Boundary Conditions** describe how electric field quantities behave at the interface between two different media.

**At a dielectric-dielectric interface:**
1. **Tangential E is continuous:** E_t1 = E_t2
2. **Normal D is continuous (no free surface charge):** D_n1 = D_n2
   → ε₁E_n1 = ε₂E_n2

If free surface charge ρ_s exists: D_n1 - D_n2 = ρ_s

**At a conductor-dielectric interface:**
1. **E_t = 0** (tangential E is zero on conductor surface)
2. **D_n = ρ_s** (normal D equals surface charge density)
   → E = ρ_s/ε â_n in the dielectric, E = 0 inside conductor

**Refraction of field lines at dielectric boundary:**
tan θ₁/tan θ₂ = ε₁/ε₂

where θ₁ and θ₂ are angles measured from the normal.

**Derivation approach:**
• Tangential condition: Apply ∮E·dl = 0 around a small rectangular loop straddling the boundary.
• Normal condition: Apply ∮D·dS = Q_enclosed to a small pillbox at the boundary.

These conditions are essential for solving boundary-value problems involving multiple dielectric regions.`,
        formulas: [
            { name: "Tangential E", expression: "E_t1 = E_t2" },
            { name: "Normal D (no charge)", expression: "D_n1 = D_n2 → ε₁E_n1 = ε₂E_n2" },
            { name: "Normal D (with charge)", expression: "D_n1 - D_n2 = ρ_s" },
            { name: "Conductor surface", expression: "D_n = ρ_s, E_t = 0" },
            { name: "Refraction law", expression: "tanθ₁/tanθ₂ = ε₁/ε₂" }
        ],
        examples: [
            `**Example:** E₁ = 5âₓ + 2âᵧ + 3â_z in medium 1 (εᵣ₁ = 4). Interface at z = 0 with medium 2 (εᵣ₂ = 2). Find E₂.
**Solution:**
Normal direction is â_z. E_t1 = 5âₓ + 2âᵧ, E_n1 = 3â_z
Tangential: E_t2 = E_t1 = 5âₓ + 2âᵧ
Normal: ε₁E_n1 = ε₂E_n2 → 4(3) = 2(E_n2) → E_n2 = 6
E₂ = 5âₓ + 2âᵧ + 6â_z V/m`,
            `**Example:** Verify refraction law for the above example.
**Solution:**
tanθ₁ = |E_t1|/|E_n1| = √(25+4)/3 = √29/3
tanθ₂ = √29/6
tanθ₁/tanθ₂ = 6/3 = 2 = ε₁/ε₂ = 4/2 = 2 ✓`
        ],
        keyPoints: [
            "Tangential E is always continuous: E_t1 = E_t2",
            "Normal D is continuous without surface charge: D_n1 = D_n2",
            "At conductor surface: E_t = 0, D_n = ρ_s",
            "Field lines refract: tanθ₁/tanθ₂ = ε₁/ε₂",
            "Derived from ∮E·dl = 0 and ∮D·dS = Q_enc"
        ]
    },

    {
        id: "poissons-equation",
        unit: 2,
        title: "Poisson's Equation",
        icon: "📊",
        keywords: [
            "poisson", "poissons equation", "poisson's equation",
            "laplacian of V", "nabla squared V", "del squared V",
            "charge distribution potential", "second order",
            "poisson equation solving"
        ],
        shortDesc: "Relates the Laplacian of potential to the charge density in a region.",
        content: `**Poisson's Equation** relates the electric potential V to the volume charge density ρᵥ:

**∇²V = -ρᵥ/ε**

This is derived by combining:
• E = -∇V (potential gradient)
• ∇·D = ρᵥ (Gauss's law)
• D = εE

Substituting: ∇·(εE) = ρᵥ → ∇·(-ε∇V) = ρᵥ → **∇²V = -ρᵥ/ε**

**The Laplacian ∇²V** in different coordinates:

**Cartesian:** ∇²V = ∂²V/∂x² + ∂²V/∂y² + ∂²V/∂z²

**Cylindrical:** ∇²V = (1/ρ)∂/∂ρ(ρ ∂V/∂ρ) + (1/ρ²)∂²V/∂φ² + ∂²V/∂z²

**Spherical:** ∇²V = (1/r²)∂/∂r(r² ∂V/∂r) + (1/r²sinθ)∂/∂θ(sinθ ∂V/∂θ) + (1/r²sin²θ)∂²V/∂φ²

Poisson's equation is a second-order partial differential equation. When solved with appropriate boundary conditions, it gives the potential distribution in any charge-filled region.`,
        formulas: [
            { name: "Poisson's Equation", expression: "∇²V = -ρᵥ/ε" },
            { name: "Laplacian (Cartesian)", expression: "∇²V = ∂²V/∂x² + ∂²V/∂y² + ∂²V/∂z²" },
            { name: "Derivation chain", expression: "E = -∇V, ∇·D = ρᵥ → ∇²V = -ρᵥ/ε" }
        ],
        examples: [
            `**Example:** V = 2x² + 3y² - 5z² in a region with ε = ε₀. Find ρᵥ.
**Solution:**
∇²V = ∂²(2x²)/∂x² + ∂²(3y²)/∂y² + ∂²(-5z²)/∂z²
= 4 + 6 - 10 = 0
ρᵥ = -ε₀∇²V = 0 (This actually satisfies Laplace's equation!)`,
            `**Example:** V = 5r² in spherical coordinates. Find ρᵥ.
**Solution:**
∇²V = (1/r²)∂/∂r(r² × 10r) = (1/r²)∂(10r³)/∂r = 30r/r² = ... 
Actually: (1/r²)d/dr(r² dV/dr) = (1/r²)d/dr(10r³) = 30r/r² ... 
Wait: = (1/r²)(30r²) = 30
ρᵥ = -ε₀(30) = -30ε₀ = -265.6 pC/m³`
        ],
        keyPoints: [
            "∇²V = -ρᵥ/ε relates potential to charge density",
            "Derived from E = -∇V and ∇·D = ρᵥ",
            "Second-order PDE requiring boundary conditions",
            "Reduces to Laplace's equation when ρᵥ = 0",
            "Laplacian has different forms in each coordinate system"
        ]
    },

    {
        id: "laplaces-equation",
        unit: 2,
        title: "Laplace's Equation and Solutions",
        icon: "🔢",
        keywords: [
            "laplace", "laplaces equation", "laplace's equation",
            "laplacian zero", "charge free region", "separation of variables",
            "laplace equation solution", "nabla squared V equals zero",
            "potential in charge free region", "solving laplace"
        ],
        shortDesc: "In charge-free regions, the potential satisfies Laplace's equation: ∇²V = 0.",
        content: `**Laplace's Equation** is a special case of Poisson's equation for charge-free regions (ρᵥ = 0):

**∇²V = 0**

**Solution for single variable problems:**

**1. Cartesian (V depends on x only):**
∂²V/∂x² = 0 → V = Ax + B (linear)

**2. Cylindrical (V depends on ρ only):**
(1/ρ)d/dρ(ρ dV/dρ) = 0 → V = A ln(ρ) + B (logarithmic)

**3. Spherical (V depends on r only):**
(1/r²)d/dr(r² dV/dr) = 0 → V = A/r + B (inverse-r)

**Solution Procedure:**
1. Identify the appropriate coordinate system based on geometry
2. Assume V depends on only one variable (if applicable)
3. Solve the resulting ODE
4. Apply **boundary conditions** to find constants A and B
5. Find E = -∇V and then D = εE

**Properties of solutions to Laplace's equation:**
• V has no local maxima or minima inside the region (mean value theorem).
• The solution is unique if boundary conditions are specified (uniqueness theorem).
• V at any point equals the average of V on any sphere centered at that point.

Laplace's equation is fundamental to solving problems involving parallel plates, coaxial cables, and concentric spheres.`,
        formulas: [
            { name: "Laplace's Equation", expression: "∇²V = 0" },
            { name: "Cartesian solution (1D)", expression: "V = Ax + B" },
            { name: "Cylindrical solution (1D)", expression: "V = A ln(ρ) + B" },
            { name: "Spherical solution (1D)", expression: "V = A/r + B" }
        ],
        examples: [
            `**Example:** Two parallel plates at x=0 (V=0) and x=d (V=V₀). Find V, E between plates.
**Solution:**
∇²V = 0 → d²V/dx² = 0 → V = Ax + B
BC: V(0) = 0 → B = 0; V(d) = V₀ → A = V₀/d
V = V₀x/d
E = -dV/dx âₓ = -V₀/d âₓ (uniform field)`,
            `**Example:** Coaxial cable: inner radius a (V=V₀), outer radius b (V=0). Find V.
**Solution:**
∇²V = 0 in cylindrical: (1/ρ)d/dρ(ρdV/dρ) = 0 → V = Alnρ + B
V(a) = V₀: Alna + B = V₀
V(b) = 0: Alnb + B = 0 → B = -Alnb
A(lna - lnb) = V₀ → A = V₀/ln(a/b)
V = V₀ ln(ρ/b)/ln(a/b)`
        ],
        keyPoints: [
            "∇²V = 0 applies in charge-free regions",
            "Special case of Poisson's equation with ρᵥ = 0",
            "Solutions depend on geometry: linear, logarithmic, or 1/r",
            "Boundary conditions determine the unique solution",
            "No local maxima or minima inside the region"
        ]
    },

    {
        id: "capacitance",
        unit: 2,
        title: "Capacitance (Parallel Plate, Annular Ring, Concentric Spheres)",
        icon: "🔋",
        keywords: [
            "capacitance", "capacitor", "parallel plate capacitor",
            "coaxial capacitor", "concentric spheres", "annular ring",
            "C equals Q by V", "capacitance formula", "parallel plate",
            "spherical capacitor", "cylindrical capacitor", "dielectric capacitor",
            "energy in capacitor", "capacitance calculation"
        ],
        shortDesc: "Capacitance measures the ability to store charge per unit voltage between conductors.",
        content: `**Capacitance** is defined as the ratio of charge to potential difference between two conductors:

**C = Q/V  [Farads]**

**General method to find capacitance:**
1. Assume charge +Q on one conductor, -Q on the other
2. Find E using Gauss's law or Laplace's equation
3. Find V = -∫E·dl between the conductors
4. Calculate C = Q/V

**1. Parallel Plate Capacitor:**
Two plates of area A separated by distance d:
**C = εA/d**
E = ρ_s/ε = Q/(εA), V = Ed = Qd/(εA)

**2. Coaxial Cable (Cylindrical/Annular):**
Inner radius a, outer radius b, length L:
**C = 2πεL/ln(b/a)**
E = ρ_L/(2περ), V = (ρ_L/2πε)ln(b/a)

**3. Concentric Spheres:**
Inner radius a, outer radius b:
**C = 4πε/(1/a - 1/b) = 4πεab/(b-a)**
For isolated sphere (b→∞): C = 4πεa

**Effect of dielectric:** Inserting a dielectric of εᵣ increases capacitance by factor εᵣ.

**Energy stored:** W = ½CV² = ½QV = Q²/(2C)

**Capacitors in series:** 1/C_total = 1/C₁ + 1/C₂ + ...
**Capacitors in parallel:** C_total = C₁ + C₂ + ...`,
        formulas: [
            { name: "Capacitance", expression: "C = Q/V [Farads]" },
            { name: "Parallel plate", expression: "C = εA/d" },
            { name: "Coaxial/Cylindrical", expression: "C = 2πεL/ln(b/a)" },
            { name: "Concentric spheres", expression: "C = 4πεab/(b-a)" },
            { name: "Isolated sphere", expression: "C = 4πεa" },
            { name: "Energy", expression: "W = ½CV² = Q²/(2C)" }
        ],
        examples: [
            `**Example:** Parallel plate: A = 0.01 m², d = 2 mm, εᵣ = 5. Find C.
**Solution:**
C = ε₀εᵣA/d = (8.854×10⁻¹²)(5)(0.01)/(0.002)
C = 221.35 pF`,
            `**Example:** Concentric spheres: a = 2 cm, b = 5 cm, εᵣ = 2. Find C.
**Solution:**
C = 4πε₀εᵣab/(b-a) = 4π(8.854×10⁻¹²)(2)(0.02)(0.05)/(0.03)
C = 4π(8.854×10⁻¹²)(2)(0.001/0.03) = 7.42 pF`,
            `**Example:** Coaxial cable: a = 1 mm, b = 5 mm, L = 1 m, εᵣ = 3. Find C.
**Solution:**
C = 2πε₀εᵣL/ln(b/a) = 2π(8.854×10⁻¹²)(3)(1)/ln(5)
C = 167.1×10⁻¹²/1.609 = 103.8 pF`
        ],
        keyPoints: [
            "C = Q/V, measured in Farads",
            "Parallel plate: C = εA/d",
            "Coaxial: C = 2πεL/ln(b/a)",
            "Concentric spheres: C = 4πεab/(b-a)",
            "Dielectric increases capacitance by factor εᵣ"
        ]
    },

    // ========================================================
    // UNIT III — STEADY MAGNETIC FIELD
    // ========================================================

    {
        id: "biot-savart-law",
        unit: 3,
        title: "Biot-Savart Law",
        icon: "🧭",
        keywords: [
            "biot savart", "biot-savart", "biot savart law", "magnetic field due to current",
            "current element", "idl cross r", "magnetic field wire",
            "field due to wire", "field due to current", "straight wire field",
            "circular loop field", "magnetic field formula", "dH", "biot savart formula"
        ],
        shortDesc: "Gives the magnetic field produced by a differential current element.",
        content: `The **Biot-Savart Law** gives the magnetic field intensity dH at a point P due to a differential current element Idl:

**dH = (I dl × â_R) / (4πR²)**

where R is the distance from the current element to point P, and â_R is the unit vector from dl to P.

**Total H** due to a complete current loop:
**H = ∫ (I dl × â_R) / (4πR²)**

**Applications:**

**1. Infinite straight wire carrying current I:**
**H = I/(2πρ) â_φ**
(circumferential field, inversely proportional to distance ρ)

**2. Circular loop of radius a at center:**
**H = I/(2a) â_z** (at center)
**H = Ia²/(2(a² + z²)^(3/2)) â_z** (on axis at distance z)

**3. Finite straight wire from α₁ to α₂:**
**H = I/(4πρ)(sinα₂ - sinα₁) â_φ**

**Key points:**
• Biot-Savart law is the magnetic equivalent of Coulomb's law.
• The cross product (dl × â_R) gives the direction via the right-hand rule.
• H is measured in A/m (Amperes per meter).
• B = μ₀H in free space, where μ₀ = 4π × 10⁻⁷ H/m.
• For surface currents: replace Idl with K dS; for volume currents: replace with J dv.`,
        formulas: [
            { name: "Biot-Savart Law", expression: "dH = (Idl × â_R)/(4πR²)" },
            { name: "Infinite wire", expression: "H = I/(2πρ) â_φ" },
            { name: "Circular loop (center)", expression: "H = I/(2a) â_z" },
            { name: "Loop (on axis)", expression: "H = Ia²/(2(a²+z²)^(3/2)) â_z" },
            { name: "Finite wire", expression: "H = I(sinα₂-sinα₁)/(4πρ) â_φ" }
        ],
        examples: [
            `**Example:** Find H at the center of a square loop of side 4 m carrying 10 A.
**Solution:**
Each side contributes equally. For each side at distance ρ = 2 m:
α₁ = -45°, α₂ = 45° → sinα₂ - sinα₁ = √2
H_each = I(√2)/(4π×2) = 10√2/(8π) = 0.5627 A/m
Total H = 4 × 0.5627 = 2.251 A/m (directed out of the plane)`,
            `**Example:** Circular loop radius 5 cm, I = 2A. Find H at 10 cm above center.
**Solution:**
H = Ia²/(2(a²+z²)^(3/2))
= (2)(0.05)²/(2(0.0025+0.01)^(3/2))
= 0.005/(2(0.0125)^(3/2))
= 0.005/(2×0.001398) = 1.788 A/m`
        ],
        keyPoints: [
            "dH = (Idl×â_R)/(4πR²) — fundamental law for H due to currents",
            "H field encircles the current (right-hand rule)",
            "Infinite wire: H = I/(2πρ), inversely proportional to distance",
            "Biot-Savart is to magnetostatics what Coulomb's law is to electrostatics",
            "B = μ₀H in free space (μ₀ = 4π×10⁻⁷ H/m)"
        ]
    },

    {
        id: "amperes-circuital-law",
        unit: 3,
        title: "Ampere's Circuital Law",
        icon: "♾️",
        keywords: [
            "ampere", "amperes law", "ampere's law", "ampere's circuital law",
            "amperes circuital law", "circulation of H", "line integral H",
            "H dot dl", "enclosed current", "curl of H",
            "ampere law applications", "toroid", "solenoid", "infinite sheet current"
        ],
        shortDesc: "The line integral of H around a closed path equals the total enclosed current.",
        content: `**Ampere's Circuital Law** states that the line integral of H around any closed path equals the total current enclosed by that path:

**∮ H · dl = I_enclosed** (integral form)

**∇ × H = J** (differential/point form, for static fields)

**Choosing an Amperian path:** Similar to Gauss's law, the key is selecting a path where H is constant and either parallel or perpendicular to dl.

**Applications:**

**1. Infinite straight wire (current I):**
∮H·dl = H(2πρ) = I → **H = I/(2πρ) â_φ**

**2. Infinite solenoid (n turns/m, current I):**
**H = nI â_z** (inside), **H = 0** (outside)

**3. Toroid (N turns, mean radius R):**
**H = NI/(2πρ)** (inside), **H = 0** (outside)

**4. Infinite sheet current (K A/m):**
**H = ½K × â_n** → |H| = K/2 on each side

**5. Coaxial cable:**
• ρ < a (inner conductor): H = Iρ/(2πa²) â_φ
• a < ρ < b: H = I/(2πρ) â_φ
• ρ > c (outer conductor): H = 0

**Limitations:** Ampere's law (static form) is only valid for **magnetostatic** (DC) fields. For time-varying fields, Maxwell added the displacement current term: ∇×H = J + ∂D/∂t.`,
        formulas: [
            { name: "Ampere's Law (integral)", expression: "∮ H · dl = I_enc" },
            { name: "Ampere's Law (differential)", expression: "∇ × H = J" },
            { name: "Infinite wire", expression: "H = I/(2πρ) â_φ" },
            { name: "Solenoid", expression: "H = nI (inside); H = 0 (outside)" },
            { name: "Toroid", expression: "H = NI/(2πρ) (inside)" },
            { name: "Sheet current", expression: "H = K/2 â (each side)" }
        ],
        examples: [
            `**Example:** A solenoid has 500 turns/m and carries 2A. Find B inside.
**Solution:**
H = nI = 500 × 2 = 1000 A/m
B = μ₀H = 4π×10⁻⁷ × 1000 = 1.257 mT`,
            `**Example:** Toroid: mean radius 10 cm, 200 turns, I = 5A. Find H and B inside.
**Solution:**
H = NI/(2πρ) = (200)(5)/(2π×0.1) = 1591.5 A/m
B = μ₀H = 4π×10⁻⁷ × 1591.5 = 2 mT`
        ],
        keyPoints: [
            "∮H·dl = I_enc (magnetic analog of Gauss's law)",
            "Best applied with symmetric current distributions",
            "∇×H = J in differential form (for static fields)",
            "Solenoid field is uniform inside, zero outside",
            "Modified by Maxwell: ∇×H = J + ∂D/∂t for time-varying fields"
        ]
    },

    {
        id: "magnetic-flux-density",
        unit: 3,
        title: "Magnetic Flux and Flux Density",
        icon: "🌊",
        keywords: [
            "magnetic flux", "flux density", "B field", "magnetic field B",
            "B equals mu H", "weber", "tesla", "magnetic flux density",
            "flux through surface", "total flux", "B vector",
            "mu naught", "permeability", "magnetic flux formula"
        ],
        shortDesc: "Magnetic flux density B = μH; total flux Φ = ∫B·dS.",
        content: `**Magnetic Flux Density (B)** is related to the magnetic field intensity H by:

**B = μH = μ₀μᵣH  [Tesla or Wb/m²]**

where:
• μ₀ = 4π × 10⁻⁷ H/m is the permeability of free space
• μᵣ is the relative permeability of the medium
• μ = μ₀μᵣ is the total permeability

**Magnetic Flux (Φ)** through a surface S:
**Φ = ∫∫_S B · dS  [Weber, Wb]**

**Gauss's Law for Magnetism:**
**∮ B · dS = 0** (no magnetic monopoles)
**∇ · B = 0** (B is always solenoidal)

This is one of Maxwell's four equations and states that magnetic field lines always form **closed loops** — they have no beginning or end (no magnetic charges/monopoles exist).

**Key relationships:**
• 1 Tesla = 1 Wb/m² = 1 V·s/m²
• The flux through any closed surface is always zero
• B lines are continuous (no sources or sinks)
• In free space: B = μ₀H
• In magnetic material: B = μ₀(H + M), where M is magnetization

**Comparison with electrostatics:**
• D = εE ↔ B = μH
• ∮D·dS = Q ↔ ∮B·dS = 0
• ∇·D = ρᵥ ↔ ∇·B = 0`,
        formulas: [
            { name: "B-H relationship", expression: "B = μH = μ₀μᵣH" },
            { name: "Magnetic Flux", expression: "Φ = ∫∫ B · dS [Wb]" },
            { name: "Gauss's Law (magnetism)", expression: "∮ B · dS = 0; ∇ · B = 0" },
            { name: "Permeability of free space", expression: "μ₀ = 4π × 10⁻⁷ H/m" }
        ],
        examples: [
            `**Example:** H = 100 A/m in a medium with μᵣ = 500. Find B and Φ through a 5 cm² area perpendicular to B.
**Solution:**
B = μ₀μᵣH = (4π×10⁻⁷)(500)(100) = 62.83 mT
Φ = B × A = 62.83×10⁻³ × 5×10⁻⁴ = 31.4 μWb`,
            `**Example:** B = 0.5â_z T. Find flux through a circular loop of radius 10 cm in the xy-plane.
**Solution:**
Φ = ∫∫ B·dS = B × πr² = 0.5 × π(0.1)² = 15.71 mWb`
        ],
        keyPoints: [
            "B = μH (analogous to D = εE)",
            "Φ = ∫B·dS gives total magnetic flux in Webers",
            "∇·B = 0 always (no magnetic monopoles)",
            "B lines are always closed loops",
            "1 Tesla = 10⁴ Gauss"
        ]
    },

    {
        id: "force-moving-charge",
        unit: 3,
        title: "Force on a Moving Charge (Lorentz Force)",
        icon: "💫",
        keywords: [
            "lorentz force", "force on charge", "moving charge", "force moving charge",
            "F equals qvB", "magnetic force", "charge in magnetic field",
            "lorentz", "velocity charge", "force on moving charge",
            "charged particle motion", "cyclotron", "helical motion"
        ],
        shortDesc: "A charge moving in a magnetic field experiences a force perpendicular to both v and B.",
        content: `The **Lorentz Force** on a charge Q moving with velocity v in electric and magnetic fields is:

**F = Q(E + v × B)**

The magnetic component alone: **F = Qv × B**

**Key characteristics:**
• The magnetic force is always **perpendicular** to both v and B.
• The magnetic force does **no work** (it only changes direction, not speed).
• |F| = QvB sinθ, where θ is the angle between v and B.

**Motion of charged particle in uniform B:**
• If v ⊥ B: **circular motion** with radius r = mv/(QB) and period T = 2πm/(QB)
• If v has components both ⊥ and ∥ to B: **helical (spiral) motion**
• The frequency of revolution ω = QB/m is called the **cyclotron frequency**

**Applications:**
• **Cyclotron:** Particle accelerator using magnetic force for circular motion
• **Mass spectrometer:** Separates ions by mass-to-charge ratio
• **Hall effect:** Voltage developed across a current-carrying conductor in a magnetic field
• **Velocity selector:** Crossed E and B fields select particles with v = E/B

The Lorentz force is the fundamental force law in electromagnetism and is used in all particle physics and accelerator design.`,
        formulas: [
            { name: "Lorentz Force", expression: "F = Q(E + v × B)" },
            { name: "Magnetic force only", expression: "F = Qv × B" },
            { name: "Circular orbit radius", expression: "r = mv/(QB)" },
            { name: "Cyclotron frequency", expression: "ω = QB/m" },
            { name: "Period", expression: "T = 2πm/(QB)" }
        ],
        examples: [
            `**Example:** An electron (m=9.11×10⁻³¹ kg, q=1.6×10⁻¹⁹ C) moves at v = 10⁶ m/s perpendicular to B = 0.1 T. Find the radius.
**Solution:**
r = mv/(qB) = (9.11×10⁻³¹)(10⁶)/((1.6×10⁻¹⁹)(0.1))
r = 9.11×10⁻²⁵/1.6×10⁻²⁰ = 5.69×10⁻⁵ m ≈ 56.9 μm`,
            `**Example:** A proton moves at 5×10⁵ m/s in B = 2 T. Find cyclotron frequency.
**Solution:**
ω = qB/m = (1.6×10⁻¹⁹)(2)/(1.67×10⁻²⁷) = 1.916×10⁸ rad/s
f = ω/(2π) = 30.5 MHz`
        ],
        keyPoints: [
            "F = Q(E + v×B) is the complete Lorentz force",
            "Magnetic force is ⊥ to both v and B — does no work",
            "Uniform B causes circular or helical motion",
            "Cyclotron frequency ω = QB/m is independent of velocity",
            "Applications: cyclotron, mass spectrometer, Hall effect"
        ]
    },

    {
        id: "force-current-element",
        unit: 3,
        title: "Force on Differential Current Element",
        icon: "⚡",
        keywords: [
            "force on current", "force current element", "idl cross B",
            "force on wire", "current in magnetic field", "force between wires",
            "ampere force law", "force on conductor", "differential current",
            "force between parallel wires", "force between currents"
        ],
        shortDesc: "A current-carrying conductor in a magnetic field experiences a force: dF = Idl × B.",
        content: `The force on a differential current element Idl in a magnetic field B is:

**dF = Idl × B**

Total force on a current-carrying conductor:
**F = I ∫ dl × B**

For a straight wire of length L in uniform field B:
**F = IL × B → |F| = BIL sinθ**

**Force between two parallel wires:**
Two parallel wires carrying currents I₁ and I₂, separated by distance d:

**F/L = μ₀I₁I₂/(2πd)  [N/m]**

• Same direction currents → **attractive** force
• Opposite direction currents → **repulsive** force

This is the basis for the definition of the **Ampere**: 1 Ampere is the current which, when flowing through two infinite parallel wires separated by 1 m, produces a force of 2×10⁻⁷ N/m.

**Torque on a current loop:**
A rectangular loop of area A carrying current I in field B:
**T = m × B = NIAB sinθ**
where m = NIA â_n is the magnetic moment, N is number of turns.

**Key applications:**
• Electric motors (torque on current loop)
• Galvanometers (measuring current via torque)
• Electromagnetic relays`,
        formulas: [
            { name: "Force on element", expression: "dF = Idl × B" },
            { name: "Straight wire", expression: "F = BIL sinθ" },
            { name: "Force between wires", expression: "F/L = μ₀I₁I₂/(2πd)" },
            { name: "Torque on loop", expression: "T = m × B = NIAB sinθ" },
            { name: "Magnetic moment", expression: "m = NIA â_n" }
        ],
        examples: [
            `**Example:** A 2 m wire carries 10 A at 30° to B = 0.5 T. Find force.
**Solution:**
F = BIL sinθ = (0.5)(10)(2)sin30° = 5 N`,
            `**Example:** Two parallel wires 10 cm apart carry I₁ = 5A, I₂ = 8A (same direction). Find F/L.
**Solution:**
F/L = μ₀I₁I₂/(2πd) = (4π×10⁻⁷)(5)(8)/(2π×0.1)
= (4π×10⁻⁷)(40)/(0.2π) = 80×10⁻⁶ N/m = 80 μN/m (attractive)`
        ],
        keyPoints: [
            "dF = Idl × B — force on current element in magnetic field",
            "Parallel same-direction currents attract, opposite repel",
            "F/L = μ₀I₁I₂/(2πd) between parallel wires",
            "Torque on loop: T = NIAB sinθ (basis of motors)",
            "Defines the Ampere: 2×10⁻⁷ N/m for 1A wires 1m apart"
        ]
    },

    {
        id: "magnetic-boundary-conditions",
        unit: 3,
        title: "Magnetic Boundary Conditions",
        icon: "🔀",
        keywords: [
            "magnetic boundary", "magnetic boundary conditions",
            "B normal", "H tangential", "magnetic interface",
            "boundary magnetic field", "continuity of B", "continuity of H",
            "magnetic boundary dielectric", "B1n equals B2n",
            "H tangential boundary"
        ],
        shortDesc: "Rules governing B and H at the interface between two magnetic media.",
        content: `**Magnetic Boundary Conditions** describe how B and H behave at the interface between two different magnetic media.

**1. Normal component of B is continuous:**
**B₁ₙ = B₂ₙ** → μ₁H₁ₙ = μ₂H₂ₙ

(Derived from ∮B·dS = 0 applied to a pillbox at the interface)

**2. Tangential component of H is continuous (no surface current):**
**H₁ₜ = H₂ₜ** → B₁ₜ/μ₁ = B₂ₜ/μ₂

If surface current density K exists:
**H₁ₜ - H₂ₜ = K** (â_n12 × (H₁ - H₂) = K)

(Derived from ∮H·dl = I_enc applied to a small rectangle at the interface)

**Refraction of magnetic field lines:**
tan θ₁/tan θ₂ = μ₁/μ₂

**Comparison with electrostatic boundary conditions:**
| Quantity | Electric | Magnetic |
|----------|----------|----------|
| Normal | D₁ₙ = D₂ₙ | B₁ₙ = B₂ₙ |
| Tangential | E₁ₜ = E₂ₜ | H₁ₜ = H₂ₜ |
| Refraction | tanθ₁/tanθ₂ = ε₁/ε₂ | tanθ₁/tanθ₂ = μ₁/μ₂ |

These conditions are essential for solving problems involving magnetic circuits, transformers, and shielding.`,
        formulas: [
            { name: "Normal B", expression: "B₁ₙ = B₂ₙ" },
            { name: "Tangential H (no current)", expression: "H₁ₜ = H₂ₜ" },
            { name: "Tangential H (with current)", expression: "H₁ₜ - H₂ₜ = K" },
            { name: "Refraction law", expression: "tanθ₁/tanθ₂ = μ₁/μ₂" }
        ],
        examples: [
            `**Example:** B₁ = 2âₓ + 3â_z T in medium 1 (μᵣ₁ = 5). Interface at z = 0 with medium 2 (μᵣ₂ = 2). Find B₂ and H₂.
**Solution:**
Normal (z): B₁ₙ = 3 T → B₂ₙ = 3 T
Tangential (x): H₁ₜ = B₁ₜ/μ₁ = 2/(μ₀×5) → H₂ₜ = same → B₂ₜ = μ₂H₂ₜ = μ₀×2×2/(μ₀×5) = 4/5 = 0.8 T
B₂ = 0.8âₓ + 3â_z T`,
            `**Example:** Verify refraction law for above.
**Solution:**
tanθ₁ = B₁ₜ/B₁ₙ = 2/3
tanθ₂ = B₂ₜ/B₂ₙ = 0.8/3
tanθ₁/tanθ₂ = (2/3)/(0.8/3) = 2/0.8 = 2.5 = μ₁/μ₂ = 5/2 ✓`
        ],
        keyPoints: [
            "Normal B is continuous: B₁ₙ = B₂ₙ (from ∇·B = 0)",
            "Tangential H is continuous (no current): H₁ₜ = H₂ₜ",
            "With surface current: H₁ₜ - H₂ₜ = K",
            "Refraction: tanθ₁/tanθ₂ = μ₁/μ₂",
            "Dual of electrostatic boundary conditions"
        ]
    },

    // ========================================================
    // UNIT IV — TIME-VARYING FIELDS & WAVE PROPAGATION
    // ========================================================

    {
        id: "faradays-law",
        unit: 4,
        title: "Faraday's Law",
        icon: "🔁",
        keywords: [
            "faraday", "faradays law", "faraday's law", "electromagnetic induction",
            "induced emf", "changing flux", "time varying", "emf",
            "lenz law", "lenz's law", "transformer emf", "motional emf",
            "induced voltage", "flux change", "induction"
        ],
        shortDesc: "A time-varying magnetic flux through a circuit induces an electromotive force (EMF).",
        content: `**Faraday's Law** states that the induced electromotive force (EMF) in a closed circuit is equal to the negative rate of change of the magnetic flux through the circuit:

**EMF = -dΦ/dt = -d/dt ∫∫ B · dS**

**Integral form:**
**∮ E · dl = -∂/∂t ∫∫ B · dS**

**Differential (point) form:**
**∇ × E = -∂B/∂t**

This is the third of Maxwell's equations.

**Two types of induced EMF:**

**1. Transformer EMF:** Due to time-changing B with stationary loop:
EMF = -∂Φ/∂t = -∫∫ (∂B/∂t) · dS

**2. Motional EMF:** Due to a moving conductor in static B:
EMF = ∫ (v × B) · dl

**Total EMF (both effects):**
EMF = ∫ (v × B) · dl - ∫∫ (∂B/∂t) · dS

**Lenz's Law:** The negative sign indicates that the induced EMF opposes the change in flux that produces it. The induced current creates a magnetic field that opposes the change.

**Physical significance:** Faraday's law links electric and magnetic fields in time-varying situations, showing that a changing magnetic field creates an electric field. This is the principle behind:
• Transformers
• Electric generators
• Inductors
• Wireless power transfer`,
        formulas: [
            { name: "Faraday's Law (integral)", expression: "∮ E·dl = -∂/∂t ∫∫ B·dS" },
            { name: "Faraday's Law (differential)", expression: "∇ × E = -∂B/∂t" },
            { name: "EMF", expression: "EMF = -dΦ/dt" },
            { name: "Transformer EMF", expression: "EMF = -∫∫ (∂B/∂t)·dS" },
            { name: "Motional EMF", expression: "EMF = ∫(v×B)·dl" }
        ],
        examples: [
            `**Example:** B = 0.5cos(100t) â_z T through a circular loop of radius 10 cm. Find induced EMF.
**Solution:**
Φ = B·A = 0.5cos(100t) × π(0.1)² = 0.01571 cos(100t) Wb
EMF = -dΦ/dt = 0.01571 × 100 sin(100t) = 1.571 sin(100t) V`,
            `**Example:** A 50 cm rod moves at v = 10 m/s perpendicular to B = 0.2 T. Find motional EMF.
**Solution:**
EMF = BvL = 0.2 × 10 × 0.5 = 1 V`
        ],
        keyPoints: [
            "∇×E = -∂B/∂t — changing B creates circulating E",
            "EMF = -dΦ/dt (Lenz's law gives the sign)",
            "Two sources: transformer EMF and motional EMF",
            "Links electric and magnetic fields dynamically",
            "Principle behind generators, transformers, inductors"
        ]
    },

    {
        id: "displacement-current",
        unit: 4,
        title: "Displacement Current",
        icon: "📡",
        keywords: [
            "displacement current", "maxwell correction", "dD/dt",
            "displacement current density", "Jd", "capacitor current",
            "ampere maxwell", "modified ampere law", "conduction current",
            "displacement current maxwell", "partial D partial t"
        ],
        shortDesc: "Maxwell's correction to Ampere's law: ∂D/∂t acts as a current source for H.",
        content: `**Displacement Current** was introduced by Maxwell to resolve an inconsistency in Ampere's law for time-varying fields.

**The Problem:** For a charging capacitor, the conduction current I flows in the wires but not between the plates. Ampere's law ∮H·dl = I gives different results depending on the surface chosen — a contradiction.

**Maxwell's Solution:** He added a displacement current density:
**J_d = ∂D/∂t**

**Modified Ampere's Law:**
**∇ × H = J + ∂D/∂t** (differential form)
**∮ H · dl = I + I_d = ∫∫(J + ∂D/∂t) · dS** (integral form)

where I_d = ∫∫(∂D/∂t)·dS is the displacement current.

**Physical significance:**
• Between capacitor plates: J = 0, but ∂D/∂t ≠ 0, providing continuity of "current"
• I_d = C dV/dt = ε(dE/dt)A for a parallel plate capacitor
• The displacement current produces a magnetic field just like conduction current
• This was Maxwell's key insight that led to predicting electromagnetic waves

**In a capacitor:**
I_d = ε₀ε_r (∂E/∂t) × A = ε (∂E/∂t) × A

The total current (conduction + displacement) is always continuous — this ensures conservation of charge.

**Key result:** The displacement current completes Maxwell's equations and makes electromagnetic wave propagation possible.`,
        formulas: [
            { name: "Displacement current density", expression: "J_d = ∂D/∂t" },
            { name: "Modified Ampere's Law", expression: "∇ × H = J + ∂D/∂t" },
            { name: "Displacement current", expression: "I_d = ∫∫ (∂D/∂t)·dS" },
            { name: "In capacitor", expression: "I_d = ε(∂E/∂t)A = C(dV/dt)" }
        ],
        examples: [
            `**Example:** A parallel plate capacitor (A = 100 cm², d = 1 mm, εᵣ = 2) has V = 100sin(1000t) V. Find I_d.
**Solution:**
E = V/d = 100sin(1000t)/0.001 = 10⁵ sin(1000t) V/m
D = εE = ε₀εᵣE = 2ε₀ × 10⁵ sin(1000t)
J_d = ∂D/∂t = 2ε₀ × 10⁵ × 1000 cos(1000t)
I_d = J_d × A = 2(8.854×10⁻¹²)(10⁸)(10⁻²) cos(1000t)
I_d = 17.71 cos(1000t) nA`,
            `**Example:** Show that I_d = I_c for a charging capacitor.
**Solution:**
I_c = C(dV/dt); C = εA/d; E = V/d → V = Ed
I_d = ε(dE/dt)A = (εA/d)(dV/dt) = C(dV/dt) = I_c ✓`
        ],
        keyPoints: [
            "J_d = ∂D/∂t — displacement current density",
            "Maxwell's key insight: ∂D/∂t acts like a current",
            "Completes Ampere's law: ∇×H = J + ∂D/∂t",
            "Ensures current continuity through capacitors",
            "Essential for electromagnetic wave prediction"
        ]
    },

    {
        id: "maxwells-equations",
        unit: 4,
        title: "Maxwell's Equations (Point and Integral Form)",
        icon: "📜",
        keywords: [
            "maxwell", "maxwells equations", "maxwell's equations",
            "four equations", "maxwell equations integral", "maxwell equations point",
            "differential form", "integral form", "electromagnetic equations",
            "all four maxwell", "maxwell laws", "fundamental equations",
            "maxwell equations summary", "maxwell first", "maxwell second",
            "maxwell third", "maxwell fourth"
        ],
        shortDesc: "The four fundamental equations governing all electromagnetic phenomena.",
        content: `**Maxwell's Equations** are the four fundamental equations that completely describe all classical electromagnetic phenomena.

**1. Gauss's Law (Electric):**
Integral: **∮ D · dS = ∫∫∫ ρᵥ dV**
Differential: **∇ · D = ρᵥ**
Meaning: Electric charges are sources of D (electric flux originates from charges).

**2. Gauss's Law (Magnetic):**
Integral: **∮ B · dS = 0**
Differential: **∇ · B = 0**
Meaning: No magnetic monopoles exist; B lines are always closed loops.

**3. Faraday's Law:**
Integral: **∮ E · dl = -∂/∂t ∫∫ B · dS**
Differential: **∇ × E = -∂B/∂t**
Meaning: A time-varying magnetic field induces an electric field.

**4. Ampere-Maxwell Law:**
Integral: **∮ H · dl = ∫∫ (J + ∂D/∂t) · dS**
Differential: **∇ × H = J + ∂D/∂t**
Meaning: Currents and changing electric fields produce magnetic fields.

**For static (time-invariant) fields:** All time derivatives vanish:
∇·D = ρᵥ, ∇·B = 0, ∇×E = 0, ∇×H = J

**For source-free regions (J=0, ρᵥ=0):**
∇·E = 0, ∇·B = 0, ∇×E = -∂B/∂t, ∇×H = ∂D/∂t

**Constitutive relations:** D = εE, B = μH, J = σE

Maxwell's equations, combined with the Lorentz force law and the constitutive relations, form the complete foundation of classical electromagnetism.`,
        formulas: [
            { name: "Gauss (Electric)", expression: "∇ · D = ρᵥ  |  ∮D·dS = Q_enc" },
            { name: "Gauss (Magnetic)", expression: "∇ · B = 0  |  ∮B·dS = 0" },
            { name: "Faraday's Law", expression: "∇×E = -∂B/∂t  |  ∮E·dl = -∂Φ/∂t" },
            { name: "Ampere-Maxwell", expression: "∇×H = J+∂D/∂t  |  ∮H·dl = I+I_d" }
        ],
        examples: [
            `**Example:** In free space (J=0, ρ=0), show Maxwell's equations lead to a wave equation.
**Solution:**
Take curl of Faraday: ∇×(∇×E) = -∂/∂t(∇×B) = -μ₀∂/∂t(∂D/∂t) = -μ₀ε₀ ∂²E/∂t²
Using identity: ∇×(∇×E) = ∇(∇·E) - ∇²E
Since ∇·E = 0: ∇²E = μ₀ε₀ ∂²E/∂t²
This is the wave equation! Speed: c = 1/√(μ₀ε₀) = 3×10⁸ m/s`,
            `**Example:** Verify that E = E₀sin(ωt-βz)âₓ satisfies Maxwell's equations in free space.
**Solution:**
∇×E = ∂Eₓ/∂z âᵧ = -βE₀cos(ωt-βz) âᵧ = -∂B/∂t
→ B = (β/ω)E₀sin(ωt-βz) âᵧ
∇×H = ε₀∂E/∂t → confirms consistency when β/ω = √(μ₀ε₀) = 1/c`
        ],
        keyPoints: [
            "4 equations completely describe electromagnetism",
            "Combine to predict electromagnetic waves at speed c = 1/√(μ₀ε₀)",
            "Gauss laws: sources of D and B",
            "Faraday + Ampere-Maxwell: coupling between E and B",
            "Constitutive relations: D=εE, B=μH, J=σE"
        ]
    },

    {
        id: "wave-propagation-free-space",
        unit: 4,
        title: "Uniform Plane Wave Propagation in Free Space",
        icon: "〰️",
        image: "images/maxwell_waves_1780413564895.png",
        keywords: [
            "plane wave", "wave propagation", "electromagnetic wave", "EM wave",
            "wave in free space", "uniform plane wave", "wave equation",
            "speed of light", "wavelength", "frequency", "phase velocity",
            "wave number", "beta", "propagation constant", "E and H wave",
            "transverse wave", "TEM wave"
        ],
        shortDesc: "Electromagnetic waves propagate in free space at the speed of light as transverse waves.",
        content: `A **Uniform Plane Wave** is an electromagnetic wave where E and H are uniform (constant) over any plane perpendicular to the direction of propagation.

**Wave equation in free space (derived from Maxwell's equations):**
**∇²E = μ₀ε₀ ∂²E/∂t²**
**∇²H = μ₀ε₀ ∂²H/∂t²**

**Solution (wave propagating in z-direction):**
**E = E₀ sin(ωt - βz) âₓ  or  E₀ e^(j(ωt-βz)) âₓ**
**H = H₀ sin(ωt - βz) âᵧ  or  H₀ e^(j(ωt-βz)) âᵧ**

**Key parameters:**
• **Phase velocity:** v_p = 1/√(μ₀ε₀) = c = 3 × 10⁸ m/s
• **Propagation constant:** β = ω√(μ₀ε₀) = ω/c = 2π/λ [rad/m]
• **Wavelength:** λ = 2π/β = c/f = v_p/f
• **Intrinsic impedance of free space:** η₀ = √(μ₀/ε₀) = 377 Ω ≈ 120π Ω
• **E/H ratio:** E₀/H₀ = η₀ = 377 Ω

**Characteristics of uniform plane waves:**
• E and H are **perpendicular** to each other and to the direction of propagation (TEM wave).
• E × H gives the direction of propagation (Poynting vector).
• E and H are **in phase** in free space (lossless medium).
• The wave carries energy in the direction of propagation.
• Frequency does not change in any medium; wavelength and velocity do.`,
        formulas: [
            { name: "Wave equation", expression: "∇²E = μ₀ε₀ ∂²E/∂t²" },
            { name: "Phase velocity", expression: "v_p = 1/√(μ₀ε₀) = c = 3×10⁸ m/s" },
            { name: "Propagation constant", expression: "β = ω√(μ₀ε₀) = 2π/λ" },
            { name: "Intrinsic impedance", expression: "η₀ = √(μ₀/ε₀) ≈ 377 Ω" },
            { name: "Wavelength", expression: "λ = c/f = 2π/β" }
        ],
        examples: [
            `**Example:** A 100 MHz wave in free space. Find λ, β, and η.
**Solution:**
λ = c/f = 3×10⁸/10⁸ = 3 m
β = 2π/λ = 2π/3 = 2.094 rad/m
η = η₀ = 377 Ω`,
            `**Example:** E = 100sin(10⁸t - βz) âₓ V/m in free space. Find H and β.
**Solution:**
ω = 10⁸ rad/s → f = ω/2π = 15.92 MHz
β = ω/c = 10⁸/(3×10⁸) = 0.333 rad/m
H₀ = E₀/η₀ = 100/377 = 0.265 A/m
H = 0.265 sin(10⁸t - 0.333z) âᵧ A/m`
        ],
        keyPoints: [
            "EM waves are transverse (E ⊥ H ⊥ propagation direction)",
            "Speed in free space: c = 1/√(μ₀ε₀) = 3×10⁸ m/s",
            "Intrinsic impedance η₀ = 377 Ω links E and H",
            "E and H are in phase in lossless media",
            "λ = c/f; β = 2π/λ = ω/c"
        ]
    },

    {
        id: "wave-propagation-dielectrics",
        unit: 4,
        title: "Wave Propagation Through Dielectrics",
        icon: "🔷",
        keywords: [
            "wave in dielectric", "dielectric medium", "wave propagation dielectric",
            "lossy dielectric", "lossless dielectric", "loss tangent",
            "attenuation constant", "alpha", "complex permittivity",
            "dielectric loss", "wave in medium", "propagation in medium"
        ],
        shortDesc: "Electromagnetic waves travel slower in dielectrics, with possible attenuation in lossy media.",
        content: `**Wave propagation in dielectrics** differs from free space due to the medium's permittivity and possible losses.

**Lossless dielectric (σ = 0):**
• Phase velocity: **v_p = 1/√(με) = c/√(μᵣεᵣ)**
• Propagation constant: **β = ω√(με)**
• Intrinsic impedance: **η = √(μ/ε) = η₀√(μᵣ/εᵣ)**
• Wavelength: **λ = λ₀/√(μᵣεᵣ)**
• No attenuation (α = 0)

**Lossy dielectric (σ ≠ 0):**
The propagation constant becomes complex: **γ = α + jβ**

**γ = jω√(με) √(1 - jσ/(ωε))**

• **α** = attenuation constant [Np/m]
• **β** = phase constant [rad/m]
• **Loss tangent:** tan δ = σ/(ωε) — ratio of conduction current to displacement current

**For low-loss dielectric (σ << ωε):**
α ≈ σ/(2)√(μ/ε)
β ≈ ω√(με)
η ≈ √(μ/ε)

**For good dielectric (σ/(ωε) << 1):**
The wave propagates with slight attenuation; E and H have a small phase difference.

**Key effect:** The wavelength and phase velocity decrease in a dielectric by factor √(εᵣ). This is why optical fibers and dielectric waveguides work.`,
        formulas: [
            { name: "Phase velocity (lossless)", expression: "v_p = c/√(μᵣεᵣ)" },
            { name: "Impedance (lossless)", expression: "η = η₀√(μᵣ/εᵣ)" },
            { name: "Complex propagation", expression: "γ = α + jβ = jω√(με(1-jσ/ωε))" },
            { name: "Loss tangent", expression: "tan δ = σ/(ωε)" },
            { name: "Wavelength in medium", expression: "λ = λ₀/√(μᵣεᵣ)" }
        ],
        examples: [
            `**Example:** A 1 GHz wave in a lossless dielectric with εᵣ = 4, μᵣ = 1. Find v_p, β, λ, η.
**Solution:**
v_p = c/√4 = 1.5×10⁸ m/s
λ = v_p/f = 1.5×10⁸/10⁹ = 0.15 m
β = 2π/λ = 2π/0.15 = 41.89 rad/m
η = 377/√4 = 188.5 Ω`,
            `**Example:** A dielectric has εᵣ = 2.5, σ = 10⁻⁴ S/m at 10 GHz. Find loss tangent.
**Solution:**
ωε = 2π(10¹⁰)(2.5×8.854×10⁻¹²) = 1.39 S/m
tanδ = σ/(ωε) = 10⁻⁴/1.39 = 7.19×10⁻⁵ (very low loss)`
        ],
        keyPoints: [
            "Waves slow down in dielectrics: v_p = c/√(εᵣ)",
            "Wavelength decreases: λ = λ₀/√(εᵣ)",
            "Loss tangent tanδ = σ/(ωε) measures material lossiness",
            "Lossy media cause exponential attenuation: e^(-αz)",
            "Impedance changes: η = η₀/√(εᵣ) for lossless"
        ]
    },

    {
        id: "poynting-theorem",
        unit: 4,
        title: "Poynting's Theorem and Poynting Vector",
        icon: "🎯",
        keywords: [
            "poynting", "poynting vector", "poynting theorem", "power flow",
            "electromagnetic power", "energy flow", "S vector",
            "E cross H", "power density", "electromagnetic energy",
            "poynting vector formula", "instantaneous power", "average power",
            "watts per square meter"
        ],
        shortDesc: "The Poynting vector S = E × H gives the direction and density of EM power flow.",
        content: `**Poynting's Theorem** describes the conservation of electromagnetic energy and power flow.

**Poynting Vector:**
**S = E × H  [W/m²]**

The Poynting vector gives the instantaneous power density (power per unit area) and direction of electromagnetic energy flow.

**Poynting's Theorem (integral form):**
**-∮ S · dS = ∂/∂t ∫∫∫ (½εE² + ½μH²) dV + ∫∫∫ σE² dV**

**Interpretation:**
• Left side: Net power flowing INTO a closed surface
• First term on right: Rate of increase of stored EM energy
• Second term: Power dissipated as heat (ohmic losses, σE²)

**Average Poynting Vector (for sinusoidal fields):**
**S_avg = ½ Re(E × H*)**

For a uniform plane wave: S_avg = E₀²/(2η) â_z

**Power through a surface:**
**P = ∫∫ S · dS  [Watts]**

**Key relationships:**
• |S| = |E||H| for plane waves (since E ⊥ H)
• S points in the direction of wave propagation
• Average power density = E₀²/(2η) = η H₀²/2
• For a wave with E₀ = 1 V/m in free space: S_avg = 1/(2×377) = 1.33 mW/m²

Poynting's theorem is the electromagnetic analog of the conservation of energy principle.`,
        formulas: [
            { name: "Poynting Vector", expression: "S = E × H [W/m²]" },
            { name: "Average power density", expression: "S_avg = ½ Re(E × H*) = E₀²/(2η)" },
            { name: "Total power", expression: "P = ∫∫ S · dS" },
            { name: "Poynting's Theorem", expression: "-∮S·dS = ∂W/∂t + P_dissipated" }
        ],
        examples: [
            `**Example:** E = 100sin(ωt-βz) âₓ V/m in free space. Find average power density.
**Solution:**
S_avg = E₀²/(2η₀) = (100)²/(2×377) = 13.26 W/m²
Direction: âₓ × âᵧ = â_z (in propagation direction)`,
            `**Example:** Find total power through a 2m × 3m window if S_avg = 5 W/m² (normal to window).
**Solution:**
P = S_avg × A = 5 × 6 = 30 W`
        ],
        keyPoints: [
            "S = E × H gives power flow direction and density",
            "Average power: S_avg = E₀²/(2η) for plane waves",
            "Poynting's theorem = conservation of EM energy",
            "Power flows perpendicular to both E and H",
            "Units: W/m² (watts per square meter)"
        ]
    },

    {
        id: "good-conductors-skin-depth",
        unit: 4,
        title: "Propagation in Good Conductors & Skin Depth",
        icon: "🔧",
        keywords: [
            "good conductor", "skin depth", "skin effect", "conductor propagation",
            "attenuation conductor", "penetration depth", "delta",
            "high frequency conductor", "current distribution conductor",
            "surface resistance", "skin depth formula", "wave in conductor"
        ],
        shortDesc: "EM waves attenuate rapidly in conductors; skin depth is the penetration distance.",
        content: `In a **good conductor** (σ >> ωε), electromagnetic waves attenuate rapidly due to the high conductivity.

**For a good conductor (σ >> ωε):**
• **α ≈ β ≈ √(πfμσ)** [both attenuation and phase constant are equal]
• **Skin depth:** δ = 1/α = **1/√(πfμσ)**
• **Phase velocity:** v_p = ω/β = √(2ω/(μσ)) << c
• **Intrinsic impedance:** η = √(jωμ/σ) = (1+j)/(σδ) = (1+j)√(ωμ/(2σ))

**Skin Depth (δ):** The distance at which the wave amplitude decreases to 1/e (≈ 37%) of its surface value.

**E(z) = E₀ e^(-z/δ) e^(-jz/δ)**

**Physical significance:**
• At high frequencies, current concentrates near the conductor surface (skin effect).
• At depth z = δ: amplitude drops to 37% of surface value.
• At z = 5δ: amplitude drops to less than 1% (practically zero).
• This is why hollow conductors work as well as solid ones at high frequencies.
• AC resistance of a wire increases with frequency due to skin effect.

**Typical skin depths at 1 GHz:**
• Copper: δ ≈ 2.1 μm
• Aluminum: δ ≈ 2.6 μm
• Silver: δ ≈ 2.0 μm

**Surface resistance:** R_s = 1/(σδ) = √(πfμ/σ) [Ω/square]`,
        formulas: [
            { name: "Skin depth", expression: "δ = 1/√(πfμσ)" },
            { name: "α and β", expression: "α = β = 1/δ = √(πfμσ)" },
            { name: "Attenuation", expression: "E(z) = E₀ e^(-z/δ)" },
            { name: "Phase velocity", expression: "v_p = √(2ω/(μσ))" },
            { name: "Impedance", expression: "η = (1+j)/(σδ)" },
            { name: "Surface resistance", expression: "R_s = 1/(σδ) = √(πfμ/σ)" }
        ],
        examples: [
            `**Example:** Find skin depth for copper (σ = 5.8×10⁷ S/m) at 1 MHz and 1 GHz.
**Solution:**
At 1 MHz: δ = 1/√(π×10⁶×4π×10⁻⁷×5.8×10⁷) = 1/√(2.3×10⁸) = 66 μm
At 1 GHz: δ = 66/√10⁶ × √10⁶... = 1/√(2.3×10¹⁴) ≈ 2.09 μm`,
            `**Example:** A wave at 100 MHz enters seawater (σ = 4 S/m, εᵣ = 81, μᵣ = 1). Find δ.
**Solution:**
Check: σ/(ωε) = 4/(2π×10⁸×81×8.854×10⁻¹²) = 4/0.45 = 8.9 >> 1 (good conductor)
δ = 1/√(πfμσ) = 1/√(π×10⁸×4π×10⁻⁷×4) = 0.025 m = 2.5 cm`
        ],
        keyPoints: [
            "Skin depth δ = 1/√(πfμσ) — decreases with frequency",
            "α = β = 1/δ in good conductors",
            "Current concentrates near surface (skin effect)",
            "Wave amplitude drops to 37% at depth δ",
            "Explains why hollow conductors work at high frequencies"
        ]
    },

    {
        id: "wave-polarization",
        unit: 4,
        title: "Wave Polarization",
        icon: "🔄",
        image: "images/wave_polarization_1780413614562.png",
        keywords: [
            "polarization", "wave polarization", "linear polarization",
            "circular polarization", "elliptical polarization",
            "polarized wave", "LP", "CP", "EP", "LHCP", "RHCP",
            "left hand", "right hand", "polarization types",
            "horizontal polarization", "vertical polarization"
        ],
        shortDesc: "Polarization describes the orientation of the E-field vector as a wave propagates.",
        content: `**Polarization** describes the time-varying behavior of the electric field vector at a fixed point in space as the wave propagates.

Consider a wave propagating in the z-direction with:
**E = Eₓ âₓ + Eᵧ âᵧ**
where Eₓ = E₁cos(ωt - βz) and Eᵧ = E₂cos(ωt - βz + δ)

**Types of polarization:**

**1. Linear Polarization (LP):**
• Phase difference δ = 0° or 180°
• E traces a line in the xy-plane
• Special cases: horizontal (E along x), vertical (E along y)

**2. Circular Polarization (CP):**
• E₁ = E₂ and δ = ±90°
• E traces a circle in the xy-plane
• **RHCP** (Right-hand): δ = -90° (E rotates clockwise looking in propagation direction)
• **LHCP** (Left-hand): δ = +90° (E rotates counterclockwise)

**3. Elliptical Polarization (EP):**
• General case: any E₁, E₂, and δ
• E traces an ellipse in the xy-plane
• LP and CP are special cases of EP

**Axial Ratio (AR):**
AR = major axis / minor axis (1 for CP, ∞ for LP)

**Applications:**
• Satellite communication uses CP to avoid orientation issues
• FM broadcasting uses CP for better reception
• Radar uses polarization diversity for target identification`,
        formulas: [
            { name: "General wave", expression: "E = E₁cos(ωt-βz)âₓ + E₂cos(ωt-βz+δ)âᵧ" },
            { name: "Linear: δ = 0°, 180°", expression: "E traces a line" },
            { name: "Circular: E₁=E₂, δ=±90°", expression: "E traces a circle" },
            { name: "Elliptical: general", expression: "E traces an ellipse" },
            { name: "Axial Ratio", expression: "AR = major/minor axis" }
        ],
        examples: [
            `**Example:** E = 5cos(ωt-βz)âₓ + 5sin(ωt-βz)âᵧ. Determine polarization.
**Solution:**
Eᵧ = 5sin(ωt-βz) = 5cos(ωt-βz-90°)
E₁ = E₂ = 5, δ = -90° → This is RHCP (right-hand circular).`,
            `**Example:** E = 3cos(ωt-βz)âₓ + 4cos(ωt-βz+45°)âᵧ. Type?
**Solution:**
E₁ = 3, E₂ = 4 (unequal), δ = 45° (not 0, 90, or 180°)
→ Elliptically polarized (left-hand, since δ > 0).`
        ],
        keyPoints: [
            "Polarization = behavior of E-field tip over time",
            "LP: δ = 0° or 180° (E oscillates along a line)",
            "CP: E₁ = E₂, δ = ±90° (E tip traces a circle)",
            "EP: most general case (E tip traces an ellipse)",
            "RHCP: δ = -90°; LHCP: δ = +90°"
        ]
    },

    // ========================================================
    // UNIT V — PLANE WAVE REFLECTION AND DISPERSION
    // ========================================================

    {
        id: "reflection-normal-incidence",
        unit: 5,
        title: "Reflection at Normal Incidence",
        icon: "🪞",
        keywords: [
            "reflection", "normal incidence", "reflection coefficient",
            "transmission coefficient", "reflected wave", "transmitted wave",
            "incident wave", "gamma reflection", "tau transmission",
            "impedance mismatch", "reflection at boundary", "normal reflection"
        ],
        shortDesc: "When an EM wave hits a boundary at normal incidence, part is reflected and part transmitted.",
        content: `When a uniform plane wave traveling in medium 1 (η₁) strikes the boundary of medium 2 (η₂) at **normal incidence** (perpendicular to the boundary), part of the wave is reflected and part is transmitted.

**Reflection Coefficient (Γ):**
**Γ = (η₂ - η₁)/(η₂ + η₁) = E_r0/E_i0**

**Transmission Coefficient (τ):**
**τ = 2η₂/(η₂ + η₁) = E_t0/E_i0**

**Relationship:** τ = 1 + Γ

**Key results:**
• |Γ| ranges from 0 (no reflection, matched media) to 1 (total reflection).
• If η₂ > η₁: Γ > 0 (reflected E is in phase with incident).
• If η₂ < η₁: Γ < 0 (reflected E has 180° phase shift).
• If η₂ = η₁: Γ = 0 (no reflection — impedance matched).

**Power relationships:**
• Reflected power fraction: |Γ|²
• Transmitted power fraction: 1 - |Γ|²
• Conservation: P_incident = P_reflected + P_transmitted

**Special case — Perfect conductor (η₂ = 0):**
Γ = -1 (total reflection with 180° phase reversal)
τ = 0 (no transmission)
A standing wave is formed in medium 1.

**Special case — Free space to dielectric:**
η₁ = η₀, η₂ = η₀/√εᵣ₂
Γ = (1 - √εᵣ₂)/(1 + √εᵣ₂)`,
        formulas: [
            { name: "Reflection coefficient", expression: "Γ = (η₂-η₁)/(η₂+η₁)" },
            { name: "Transmission coefficient", expression: "τ = 2η₂/(η₂+η₁) = 1+Γ" },
            { name: "Reflected power", expression: "P_r/P_i = |Γ|²" },
            { name: "Transmitted power", expression: "P_t/P_i = 1-|Γ|²" },
            { name: "Perfect conductor", expression: "Γ = -1, τ = 0" }
        ],
        examples: [
            `**Example:** A wave in free space hits glass (εᵣ = 4). Find Γ and τ.
**Solution:**
η₁ = 377 Ω, η₂ = 377/√4 = 188.5 Ω
Γ = (188.5-377)/(188.5+377) = -188.5/565.5 = -0.333
τ = 1 + Γ = 0.667
Reflected power = |Γ|² = 11.1%, Transmitted = 88.9%`,
            `**Example:** A wave travels from medium 1 (εᵣ=1) to medium 2 (εᵣ=9). Find power reflected.
**Solution:**
η₁ = 377 Ω, η₂ = 377/3 = 125.67 Ω
Γ = (125.67-377)/(125.67+377) = -251.33/502.67 = -0.5
Reflected power = |Γ|² = 25%`
        ],
        keyPoints: [
            "Γ = (η₂-η₁)/(η₂+η₁) — depends on impedance mismatch",
            "τ = 1 + Γ (for E-field); power: |τ|²η₁/η₂ for power",
            "No reflection when η₁ = η₂ (matched)",
            "Perfect conductor: total reflection (Γ = -1)",
            "Power conservation: reflected + transmitted = incident"
        ]
    },

    {
        id: "standing-wave-ratio",
        unit: 5,
        title: "Standing Wave Ratio (SWR)",
        icon: "📊",
        keywords: [
            "standing wave", "SWR", "VSWR", "standing wave ratio",
            "voltage standing wave ratio", "Emax", "Emin",
            "standing wave pattern", "maxima minima", "SWR formula",
            "reflection standing wave"
        ],
        shortDesc: "SWR measures the mismatch between media and the standing wave pattern formed.",
        content: `When reflection occurs at a boundary, the incident and reflected waves combine to form a **standing wave** pattern in medium 1.

**Standing Wave Ratio (SWR or VSWR):**
**SWR = (1 + |Γ|)/(1 - |Γ|)**

Also: **|Γ| = (SWR - 1)/(SWR + 1)**

**Standing wave pattern:**
The total field in medium 1 is:
E_total = E_i + E_r

The magnitude varies with position:
• **Maximum:** |E_max| = |E_i|(1 + |Γ|)
• **Minimum:** |E_min| = |E_i|(1 - |Γ|)
• **SWR = |E_max|/|E_min|**

**Spacing between maxima/minima:**
• Distance between adjacent maxima (or minima) = λ/2
• Distance between adjacent max and min = λ/4

**Key values:**
| Γ | SWR | Interpretation |
|---|-----|---------------|
| 0 | 1 | Perfect match, no standing wave |
| 0.5 | 3 | Moderate mismatch |
| 1 | ∞ | Total reflection (short or open) |

**Special case — Perfect conductor:**
|Γ| = 1, SWR = ∞
Pure standing wave (no power transmitted)
E = 0 at the conductor surface and at multiples of λ/2

**Power relationships:**
Reflected power = ((SWR-1)/(SWR+1))²
Transmitted power = 1 - ((SWR-1)/(SWR+1))²`,
        formulas: [
            { name: "SWR", expression: "SWR = (1+|Γ|)/(1-|Γ|)" },
            { name: "|Γ| from SWR", expression: "|Γ| = (SWR-1)/(SWR+1)" },
            { name: "E_max", expression: "|E_max| = E_i(1+|Γ|)" },
            { name: "E_min", expression: "|E_min| = E_i(1-|Γ|)" },
            { name: "Max/min spacing", expression: "λ/4 between adjacent max and min" }
        ],
        examples: [
            `**Example:** Γ = 0.6. Find SWR.
**Solution:**
SWR = (1+0.6)/(1-0.6) = 1.6/0.4 = 4`,
            `**Example:** SWR = 3. Find |Γ| and percentage of power reflected.
**Solution:**
|Γ| = (3-1)/(3+1) = 0.5
Power reflected = |Γ|² = 25%
Power transmitted = 75%`
        ],
        keyPoints: [
            "SWR = (1+|Γ|)/(1-|Γ|) — always ≥ 1",
            "SWR = 1 means perfect match (no reflection)",
            "SWR = ∞ means total reflection",
            "Adjacent maxima/minima are λ/2 apart",
            "Adjacent max and min are λ/4 apart"
        ]
    },

    {
        id: "wave-general-directions",
        unit: 5,
        title: "Plane Wave Propagation in General Directions",
        icon: "🧭",
        keywords: [
            "general direction", "wave vector", "k vector",
            "oblique propagation", "propagation direction", "wave vector k",
            "plane wave general", "k dot r", "direction cosines",
            "propagation in arbitrary direction"
        ],
        shortDesc: "Plane waves can propagate in any direction described by the wave vector k.",
        content: `A **plane wave propagating in a general direction** is described using the wave vector **k**:

**E = E₀ e^(-j k·r)**

where:
• **k** = kₓâₓ + kᵧâᵧ + k_zâ_z is the **wave vector** (propagation vector)
• |k| = β = ω√(με) is the propagation constant
• **r** = xâₓ + yâᵧ + zâ_z is the position vector
• k·r = kₓx + kᵧy + k_zz

**Direction of propagation:** k̂ = k/|k| gives the unit vector in the propagation direction.

**Instantaneous form:**
E = E₀ cos(ωt - k·r)

**Properties:**
• Surfaces of constant phase (wavefronts) are planes perpendicular to k.
• k · r = constant defines a plane (wavefront).
• E ⊥ k and H ⊥ k (transverse wave).
• E ⊥ H (E, H, k form a right-handed triad).
• H = (k̂ × E)/η

**Direction cosines:**
If k makes angles α, β, γ with x, y, z axes:
kₓ = |k|cosα, kᵧ = |k|cosβ, k_z = |k|cosγ
cos²α + cos²β + cos²γ = 1

**Example of a wave in general direction:**
E = E₀ e^(-j(3x+4y)) âₓ → k = 3âₓ + 4âᵧ, |k| = 5
Propagation direction: k̂ = (3âₓ + 4âᵧ)/5`,
        formulas: [
            { name: "General plane wave", expression: "E = E₀ e^(-jk·r)" },
            { name: "Wave vector magnitude", expression: "|k| = β = ω√(με)" },
            { name: "Phase", expression: "k·r = kₓx + kᵧy + k_zz" },
            { name: "H from E", expression: "H = (k̂ × E)/η" },
            { name: "Direction cosines", expression: "cos²α + cos²β + cos²γ = 1" }
        ],
        examples: [
            `**Example:** E = 10e^(-j(3x+4z)) âᵧ V/m in free space. Find propagation direction and f.
**Solution:**
k = 3âₓ + 4â_z, |k| = 5 rad/m
k̂ = (3âₓ + 4â_z)/5
β = 5 = ω/c → ω = 5c = 1.5×10⁹ rad/s → f = 238.7 MHz
H = (k̂ × E)/η₀ = (3âₓ+4â_z)/5 × 10âᵧ / 377`,
            `**Example:** A wave propagates at 45° from z-axis in xz-plane at 1 GHz. Write k.
**Solution:**
|k| = ω/c = 2π×10⁹/(3×10⁸) = 20.94 rad/m
k = |k|(sin45° âₓ + cos45° â_z) = 14.81(âₓ + â_z) rad/m`
        ],
        keyPoints: [
            "k vector defines propagation direction and rate",
            "E = E₀e^(-jk·r) for general direction wave",
            "E, H, k are mutually perpendicular",
            "Wavefronts are planes ⊥ to k",
            "|k| = ω√(με) = β"
        ]
    },

    {
        id: "oblique-incidence",
        unit: 5,
        title: "Reflection at Oblique Incidence",
        icon: "↗️",
        image: "images/snells_law_1780413592083.png",
        keywords: [
            "oblique incidence", "snells law", "snell's law", "angle of incidence",
            "angle of reflection", "angle of refraction", "brewster angle",
            "critical angle", "total internal reflection", "TIR",
            "parallel polarization", "perpendicular polarization",
            "fresnel equations", "fresnel coefficients", "TE TM"
        ],
        shortDesc: "Reflection and refraction at a boundary when the wave hits at an angle.",
        content: `When a plane wave hits a boundary at an **oblique angle** (not perpendicular), the behavior depends on the angle of incidence and polarization.

**Snell's Laws:**
• **Angle of reflection = Angle of incidence:** θᵣ = θᵢ
• **Snell's Law of refraction:** n₁sinθᵢ = n₂sinθₜ
  or: sinθᵢ/sinθₜ = √(ε₂μ₂)/√(ε₁μ₁)

where n = √(εᵣμᵣ) is the refractive index.

**Two polarization cases:**

**1. Perpendicular Polarization (TE, s-polarization):**
E is perpendicular to the plane of incidence.
Γ⊥ = (η₂cosθᵢ - η₁cosθₜ)/(η₂cosθᵢ + η₁cosθₜ)
τ⊥ = 2η₂cosθᵢ/(η₂cosθᵢ + η₁cosθₜ)

**2. Parallel Polarization (TM, p-polarization):**
E is parallel to the plane of incidence.
Γ∥ = (η₂cosθₜ - η₁cosθᵢ)/(η₂cosθₜ + η₁cosθᵢ)
τ∥ = 2η₂cosθᵢ/(η₂cosθₜ + η₁cosθᵢ)

**Brewster Angle (θ_B):** The angle at which Γ∥ = 0 (no reflection for parallel polarization):
**tanθ_B = √(ε₂/ε₁)** (for non-magnetic media)

**Critical Angle & Total Internal Reflection:**
When wave goes from denser to rarer medium (n₁ > n₂):
**sinθ_c = n₂/n₁**
For θᵢ > θ_c: total internal reflection occurs (|Γ| = 1)
This is the principle behind optical fibers!`,
        formulas: [
            { name: "Snell's Law", expression: "n₁sinθᵢ = n₂sinθₜ" },
            { name: "Law of reflection", expression: "θᵣ = θᵢ" },
            { name: "Brewster angle", expression: "tanθ_B = √(ε₂/ε₁)" },
            { name: "Critical angle", expression: "sinθ_c = n₂/n₁" },
            { name: "Γ⊥ (TE)", expression: "Γ⊥ = (η₂cosθᵢ-η₁cosθₜ)/(η₂cosθᵢ+η₁cosθₜ)" },
            { name: "Γ∥ (TM)", expression: "Γ∥ = (η₂cosθₜ-η₁cosθᵢ)/(η₂cosθₜ+η₁cosθᵢ)" }
        ],
        examples: [
            `**Example:** A wave from air hits glass (εᵣ=4) at 45°. Find refraction angle and Brewster angle.
**Solution:**
sinθₜ = sinθᵢ × n₁/n₂ = sin45°/2 = 0.3536 → θₜ = 20.7°
tanθ_B = √(ε₂/ε₁) = √4 = 2 → θ_B = 63.43°`,
            `**Example:** Light in glass (n=1.5) hits air interface. Find critical angle.
**Solution:**
sinθ_c = n₂/n₁ = 1/1.5 = 0.667 → θ_c = 41.8°
For θᵢ > 41.8°, total internal reflection occurs.`
        ],
        keyPoints: [
            "Snell's law: n₁sinθᵢ = n₂sinθₜ",
            "θᵣ = θᵢ always (law of reflection)",
            "Brewster angle: no reflection for parallel polarization",
            "Critical angle: total internal reflection when n₁ > n₂",
            "Two cases: TE (⊥) and TM (∥) polarization"
        ]
    },

    {
        id: "dispersive-media",
        unit: 5,
        title: "Wave Propagation and Pulse Broadening in Dispersive Media",
        icon: "🌈",
        image: "images/pulse_broadening_1780413635456.png",
        keywords: [
            "dispersion", "dispersive media", "pulse broadening",
            "group velocity", "phase velocity", "group delay",
            "dispersion relation", "frequency dependent", "pulse spread",
            "bandwidth", "signal distortion", "chromatic dispersion",
            "group velocity dispersion", "dispersive"
        ],
        shortDesc: "In dispersive media, different frequencies travel at different speeds, causing pulse broadening.",
        content: `In a **dispersive medium**, the phase velocity depends on frequency (v_p = v_p(ω)). This causes different frequency components of a signal to travel at different speeds, leading to pulse distortion and broadening.

**Phase Velocity:**
**v_p = ω/β** — velocity of a single-frequency wavefront

**Group Velocity:**
**v_g = dω/dβ** — velocity at which the envelope (energy) of a pulse travels

**Relationship:**
v_g = v_p - λ(dv_p/dλ) = v_p(1 - (β/v_p)(dv_p/dβ))

**Types of dispersion:**
• **Normal dispersion:** dv_p/dω < 0 (v_p decreases with ω) → v_g < v_p
• **Anomalous dispersion:** dv_p/dω > 0 (v_p increases with ω) → v_g > v_p
• **No dispersion:** v_p = constant → v_g = v_p (e.g., free space)

**Pulse Broadening:**
A pulse of initial duration τ₀ spreads as it travels through a dispersive medium. The broadening depends on:
• **Group velocity dispersion (GVD):** d²β/dω² = β₂
• After distance L: τ ≈ √(τ₀² + (β₂L/τ₀)²)
• For severe broadening: Δτ ≈ |β₂|L·Δω

**Physical consequences:**
• In optical fibers: limits data rate × distance product
• In waveguides: different modes travel at different speeds
• In the ionosphere: causes signal distortion for radio waves
• In glass: causes chromatic aberration (rainbow effect from a prism)

**Dispersion relation example:**
For a plasma: ω² = ω_p² + c²k² → v_p = c/√(1-(ω_p/ω)²) > c
v_g = c√(1-(ω_p/ω)²) < c; v_p × v_g = c²`,
        formulas: [
            { name: "Phase velocity", expression: "v_p = ω/β" },
            { name: "Group velocity", expression: "v_g = dω/dβ" },
            { name: "Dispersion parameter", expression: "β₂ = d²β/dω²" },
            { name: "Pulse broadening", expression: "Δτ ≈ |β₂|L·Δω" },
            { name: "Plasma: v_p × v_g", expression: "v_p × v_g = c²" }
        ],
        examples: [
            `**Example:** In a medium, β = 2ω²/c. Find v_p and v_g at ω = 10⁸ rad/s.
**Solution:**
v_p = ω/β = ω/(2ω²/c) = c/(2ω) = (3×10⁸)/(2×10⁸) = 1.5 m/s
v_g = dω/dβ; β = 2ω²/c → dβ/dω = 4ω/c
v_g = c/(4ω) = (3×10⁸)/(4×10⁸) = 0.75 m/s
Note: v_g < v_p (normal dispersion)`,
            `**Example:** A pulse of width 1 ns travels 10 km in fiber with β₂ = 20 ps²/km. Find broadening.
**Solution:**
Δτ = |β₂|L/τ₀ = (20×10⁻²⁴)(10×10³)/(1×10⁻⁹)
= 200×10⁻²¹/10⁻⁹ = 0.2 ns
Final pulse width ≈ √(1² + 0.2²) ≈ 1.02 ns`
        ],
        keyPoints: [
            "Dispersive: v_p depends on frequency",
            "v_p = ω/β (phase velocity); v_g = dω/dβ (group velocity)",
            "Energy travels at group velocity v_g",
            "Pulse broadening limits bandwidth × distance",
            "Free space is non-dispersive (v_p = v_g = c)"
        ]
    }
];

// ============================================================
// TOPICS LIST (for the Topics Grid display)
// ============================================================

const TOPICS_LIST = [
    {
        id: "unit1-electrostatics",
        title: "Electrostatics Fundamentals",
        icon: "⚡",
        description: "Coulomb's Law, Electric Field, Flux Density, Gauss's Law, Potential, Energy Density",
        unit: 1,
        tag: "Unit I",
        youtube: "https://www.youtube.com/watch?v=mdulzEfQXDE",
        article: "https://www.khanacademy.org/science/electrical-engineering/ee-electrostatics"
    },
    {
        id: "unit1-divergence",
        title: "Divergence Theorem",
        icon: "📐",
        description: "Converting surface integrals to volume integrals, divergence in all coordinate systems",
        unit: 1,
        tag: "Unit I",
        youtube: "https://www.youtube.com/watch?v=rB83DpBJQsE",
        article: "https://mathinsight.org/divergence_theorem_introduction"
    },
    {
        id: "unit1-potential",
        title: "Potential & Gradient",
        icon: "📈",
        description: "Electric potential, potential difference, potential gradient, E = -∇V",
        unit: 1,
        tag: "Unit I",
        youtube: "https://www.youtube.com/watch?v=QkHRMXMfKBc",
        article: "https://www.khanacademy.org/science/electrical-engineering/ee-electrostatics/ee-electric-potential-voltage"
    },
    {
        id: "unit2-dipole",
        title: "Electric Dipole",
        icon: "🧲",
        description: "Dipole field, dipole moment, torque on dipole, far-field approximation",
        unit: 2,
        tag: "Unit II",
        youtube: "https://www.youtube.com/watch?v=WIgRsNx_pv0",
        article: "https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/University_Physics_II_-_Thermodynamics_Electricity_and_Magnetism_(OpenStax)/05%3A_Electric_Charges_and_Fields/5.07%3A_Electric_Dipoles"
    },
    {
        id: "unit2-materials",
        title: "Conductors & Dielectrics",
        icon: "🔩",
        description: "Properties, polarization, permittivity, boundary conditions",
        unit: 2,
        tag: "Unit II",
        youtube: "https://www.youtube.com/watch?v=1Qk8OZN07LU",
        article: "https://www.electronics-tutorials.ws/capacitor/dielectrics.html"
    },
    {
        id: "unit2-laplace",
        title: "Laplace & Poisson Equations",
        icon: "🔢",
        description: "∇²V = 0 and ∇²V = -ρ/ε, solutions for different geometries",
        unit: 2,
        tag: "Unit II",
        youtube: "https://www.youtube.com/watch?v=pMQ2iyNMASI",
        article: "https://eng.libretexts.org/Bookshelves/Electrical_Engineering/Electro-Optics/Book%3A_Electromagnetics_I_(Ellingson)/05%3A_Electrostatics/5.15%3A_Poisson's_and_Laplace's_Equations"
    },
    {
        id: "unit2-capacitance",
        title: "Capacitance",
        icon: "🔋",
        description: "Parallel plate, coaxial, concentric spheres, energy storage",
        unit: 2,
        tag: "Unit II",
        youtube: "https://www.youtube.com/watch?v=f_MZNsEqyQw",
        article: "https://www.khanacademy.org/science/physics/circuits-topic/circuits-with-capacitors-topic/a/capacitors-and-capacitance"
    },
    {
        id: "unit3-biotsavart",
        title: "Biot-Savart Law",
        icon: "🧭",
        description: "Magnetic field due to current elements, wire, loop configurations",
        unit: 3,
        tag: "Unit III",
        youtube: "https://www.youtube.com/watch?v=2ohtAHlGCgA",
        article: "https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/University_Physics_II_-_Thermodynamics_Electricity_and_Magnetism_(OpenStax)/12%3A_Sources_of_Magnetic_Fields/12.02%3A_The_Biot-Savart_Law"
    },
    {
        id: "unit3-ampere",
        title: "Ampere's Circuital Law",
        icon: "♾️",
        description: "∮H·dl = I, solenoid, toroid, coaxial cable applications",
        unit: 3,
        tag: "Unit III",
        youtube: "https://www.youtube.com/watch?v=k8mPvBfhZ3g",
        article: "https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/University_Physics_II_-_Thermodynamics_Electricity_and_Magnetism_(OpenStax)/12%3A_Sources_of_Magnetic_Fields/12.05%3A_Amperes_Law"
    },
    {
        id: "unit3-magnetic",
        title: "Magnetic Flux & Forces",
        icon: "💫",
        description: "B = μH, Lorentz force, force on current, magnetic boundaries",
        unit: 3,
        tag: "Unit III",
        youtube: "https://www.youtube.com/watch?v=NnlAI4ZiUrQ",
        article: "https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields"
    },
    {
        id: "unit4-faraday",
        title: "Faraday's Law & Displacement Current",
        icon: "🔁",
        description: "Electromagnetic induction, EMF, Maxwell's correction to Ampere's law",
        unit: 4,
        tag: "Unit IV",
        youtube: "https://www.youtube.com/watch?v=nGQbA2jwkWI",
        article: "https://phys.libretexts.org/Bookshelves/University_Physics/University_Physics_(OpenStax)/University_Physics_II_-_Thermodynamics_Electricity_and_Magnetism_(OpenStax)/13%3A_Electromagnetic_Induction/13.03%3A_Faradays_Law"
    },
    {
        id: "unit4-maxwell",
        title: "Maxwell's Equations",
        icon: "📜",
        description: "All four equations in point and integral form, wave equation derivation",
        unit: 4,
        tag: "Unit IV",
        youtube: "https://www.youtube.com/watch?v=hJD8kuYGKNE",
        article: "https://www.maxwells-equations.com/"
    },
    {
        id: "unit4-waves",
        title: "Wave Propagation",
        icon: "〰️",
        description: "Plane waves in free space, dielectrics, Poynting vector, skin depth",
        unit: 4,
        tag: "Unit IV",
        youtube: "https://www.youtube.com/watch?v=FWCN_uI5ygY",
        article: "https://eng.libretexts.org/Bookshelves/Electrical_Engineering/Electro-Optics/Book%3A_Electromagnetics_I_(Ellingson)/09%3A_Plane_Waves_in_Lossless_Media",
        image: "images/maxwell_waves_1780413564895.png"
    },
    {
        id: "unit4-polarization",
        title: "Wave Polarization",
        icon: "🔄",
        description: "Linear, circular, elliptical polarization, RHCP, LHCP",
        unit: 4,
        tag: "Unit IV",
        youtube: "https://www.youtube.com/watch?v=Q0qrU4nprB0",
        article: "https://eng.libretexts.org/Bookshelves/Electrical_Engineering/Electro-Optics/Book%3A_Electromagnetics_I_(Ellingson)/09%3A_Plane_Waves_in_Lossless_Media/9.06%3A_Wave_Polarization",
        image: "images/wave_polarization_1780413614562.png"
    },
    {
        id: "unit5-reflection",
        title: "Reflection & Transmission",
        icon: "🪞",
        description: "Normal incidence, oblique incidence, SWR, Brewster & critical angles",
        unit: 5,
        tag: "Unit V",
        youtube: "https://www.youtube.com/watch?v=NVNhJkjaL1c",
        article: "https://eng.libretexts.org/Bookshelves/Electrical_Engineering/Electro-Optics/Book%3A_Electromagnetics_I_(Ellingson)/05%3A_Electrostatics/5.17%3A_Boundary_Conditions_on_the_Electric_Field_Intensity",
        image: "images/snells_law_1780413592083.png"
    },
    {
        id: "unit5-dispersion",
        title: "Dispersion & Pulse Broadening",
        icon: "🌈",
        description: "Phase velocity, group velocity, dispersive media, signal distortion",
        unit: 5,
        tag: "Unit V",
        youtube: "https://www.youtube.com/watch?v=oPVIe-O5HG0",
        article: "https://www.rp-photonics.com/chromatic_dispersion.html",
        image: "images/pulse_broadening_1780413635456.png"
    }
];

// ============================================================
// FORMULAS LIST (for the Formulas Grid display)
// ============================================================

const FORMULAS_LIST = [
    {
        name: "Coulomb's Law",
        expression: "F = Q₁Q₂/(4πε₀R²) â_R",
        description: "Force between two point charges separated by distance R."
    },
    {
        name: "Gauss's Law",
        expression: "∮ D · dS = Q_enc  |  ∇ · D = ρᵥ",
        description: "Total electric flux through closed surface equals enclosed charge."
    },
    {
        name: "Electric Potential",
        expression: "V = -∫ E · dl  |  E = -∇V",
        description: "Potential is negative line integral of E; E is negative gradient of V."
    },
    {
        name: "Laplace's Equation",
        expression: "∇²V = 0",
        description: "Governs potential in charge-free regions."
    },
    {
        name: "Poisson's Equation",
        expression: "∇²V = -ρᵥ/ε",
        description: "Relates Laplacian of potential to charge density."
    },
    {
        name: "Capacitance (Parallel Plate)",
        expression: "C = εA/d",
        description: "Capacitance of parallel plates with area A and separation d."
    },
    {
        name: "Biot-Savart Law",
        expression: "dH = (Idl × â_R)/(4πR²)",
        description: "Magnetic field from a differential current element."
    },
    {
        name: "Ampere's Circuital Law",
        expression: "∮ H · dl = I_enc  |  ∇ × H = J",
        description: "Line integral of H around closed path equals enclosed current."
    },
    {
        name: "Lorentz Force",
        expression: "F = Q(E + v × B)",
        description: "Total electromagnetic force on a moving charge."
    },
    {
        name: "Faraday's Law",
        expression: "∇ × E = -∂B/∂t  |  EMF = -dΦ/dt",
        description: "Changing magnetic flux induces an electric field."
    },
    {
        name: "Ampere-Maxwell Law",
        expression: "∇ × H = J + ∂D/∂t",
        description: "Currents and changing E fields produce magnetic fields."
    },
    {
        name: "Wave Equation",
        expression: "∇²E = μ₀ε₀ ∂²E/∂t²",
        description: "Electromagnetic wave equation in free space."
    },
    {
        name: "Intrinsic Impedance",
        expression: "η₀ = √(μ₀/ε₀) ≈ 377 Ω",
        description: "Ratio of E to H in a plane wave in free space."
    },
    {
        name: "Poynting Vector",
        expression: "S = E × H  [W/m²]",
        description: "Direction and density of electromagnetic power flow."
    },
    {
        name: "Skin Depth",
        expression: "δ = 1/√(πfμσ)",
        description: "Penetration depth of EM wave in a conductor."
    },
    {
        name: "Reflection Coefficient",
        expression: "Γ = (η₂ - η₁)/(η₂ + η₁)",
        description: "Fraction of wave amplitude reflected at a boundary."
    },
    {
        name: "Snell's Law",
        expression: "n₁ sinθᵢ = n₂ sinθₜ",
        description: "Relates angles of incidence and refraction at a boundary."
    },
    {
        name: "Standing Wave Ratio",
        expression: "SWR = (1+|Γ|)/(1-|Γ|)",
        description: "Ratio of maximum to minimum field in a standing wave."
    },
    {
        name: "Group Velocity",
        expression: "v_g = dω/dβ",
        description: "Velocity at which the energy envelope of a pulse travels."
    },
    {
        name: "Brewster Angle",
        expression: "tan θ_B = √(ε₂/ε₁)",
        description: "Angle at which no reflection occurs for parallel polarization."
    }
];
